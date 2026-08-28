import styles from './side-menu.module.css';
import Link from "next/link";

export default function SideMenu() {

    return (
        <nav className={styles.menu}>
            
            <Link href="/" className={styles.link}>
                <p className={styles.logo}>JAFAR</p>
            </Link>

                <ol>
                    <Link className={`${styles.link} ${styles.top}`} href={`/kiwis`}>
                    🥝 Kiwis
                    </Link>
                </ol>
                <ol className={styles.link}>
                    <Link href={`/kiwis/formatcarre`}>
                        🥝 Format carré
                    </Link>
                </ol>
                <ol className={styles.link}>
                    <Link href={`/kiwis/comicstrip`}>
                        🥝 Comic strip
                    </Link>
                </ol>
                <ol className={styles.link}>
                    <Link href={`/kiwis/posters`}>
                         🥝 Posters
                    </Link>
                </ol>
                {/*<ol className={`${styles.link} ${styles.top}`}>
                    <Link href={`/photos/serie1`}>
                       📷 Série #1
                    </Link>
                </ol>
                <ol className={styles.link}>
                    <Link href={`/photos/serie2`}>
                        📷 Série #2
                    </Link>
                </ol>*/}
                <ol className={`${styles.link} ${styles.top}`}>
                    <Link href={`/lbm`}>
                         🌟 La Baguette Magique
                    </Link>
                </ol>
                <ol className={`${styles.link} ${styles.top}`}>
                    <Link href={`/smady`}>
                         🧿 Saint-Maur a des yeux
                    </Link>
                </ol>
                <ol className={styles.link}>
                    <Link href={`/smady/carte`}>
                         🧿 Carte
                    </Link>
                </ol>
                <ol className={styles.link}>
                    <Link href={`/smady/chapitre1`}>
                        🧿 Chapitre 1
                    </Link>
                </ol>
                <ol className={styles.link}>
                    <Link href={`/smady/chapitre2`}>
                        🧿 Chapitre 2
                    </Link>
                </ol>
                <ol className={styles.link}>
                    <Link href={`/smady/chapitre3`}>
                        🧿 Chapitre 3
                    </Link>
                </ol>
                <ol className={styles.link}>
                    <Link href={`/smady/chapitre4`}>
                        🧿 Chapitre 4
                    </Link>
                </ol>
                
                <ol className={`${styles.link} ${styles.top}`}>
                    <Link href={`/strudelrepl/track1`}>
                        🌀 Track #1
                    </Link>
                </ol>
                <ol className={styles.link}>
                    <Link href={`/strudelrepl/track2`}>
                        🌀 Track #2
                    </Link>
                </ol>
                <ol className={styles.link}>
                    <Link href={`/strudelrepl/track3`}>
                        🌀 Track #3
                    </Link>
                </ol>
                <ol className={styles.link}>
                    <Link href={`/strudelrepl/track4`}>
                        🌀 Track #4
                    </Link>
                </ol>
                <ol className={styles.link}>
                    <Link href={`/strudelrepl/track5`}>
                        🌀 Track #5
                    </Link>
                </ol>
                <ol className={styles.link}>
                    <Link href={`/strudelrepl/track6`}>
                        🌀 Track #6
                    </Link>
                </ol>
        </nav>
    )
}