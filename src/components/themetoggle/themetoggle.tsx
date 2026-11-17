import {useEffect, useState} from 'react'
import { useDarkModeContext } from '@/components/darkmodeprovider/darkmodeprovider'
import styles from './themetoggle.module.css'


const ThemeToggle: React.FC = () => {
  const { mode, changeMode } = useDarkModeContext()
  const [mounted, setMounted] = useState(false)
  const [systemDark, setSystemDark] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    setSystemDark(mq.matches)
    setMounted(true)

    const onChange = (e: MediaQueryListEvent) => setSystemDark(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Thème réellement affiché (gère le mode "system")
  const isDark = mode === 'system' ? systemDark : mode === 'dark'

  return (
    <button
      type="button"
      className={styles['theme-toggle']}
      onClick={() => changeMode(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Passer au thème clair' : 'Passer au thème sombre'}
      title={isDark ? 'Thème clair' : 'Thème sombre'}
    >
      {mounted &&
        (isDark ? (
          // Soleil
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        ) : (
          // Lune
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ))}
    </button>
  )
}

export default ThemeToggle