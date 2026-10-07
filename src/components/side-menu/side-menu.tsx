import Link from 'next/link';
import styles from './side-menu.module.css';

export default function SideMenu() {

    return (
        <nav className={styles.menu}>
            
                <ul className={`${styles.toplink}`}>
                    <Link href={`/kiwis`}>
                    Kiwis 
                    </Link>
                    <li className={styles.sublink}>
                        <Link href={`/kiwis/formatcarre`}>
                            Format carré
                        </Link>
                    </li>
                    <li className={styles.sublink}>
                        <Link href={`/kiwis/comicstrip`}>
                            Comic strip
                        </Link>
                    </li>
                    <li className={styles.sublink}>
                        <Link href={`/kiwis/posters`}>
                            Posters
                        </Link>
                    </li>
                </ul>


                {/*<ol className={`${styles.sublink}`}>
                    <Link href={`/photos/serie1`}>
                       📷 Série #1
                    </Link>
                </ol>
                <ol className={styles.sublink}>
                    <Link href={`/photos/serie2`}>
                        📷 Série #2
                    </Link>
                </ol>
                <ol className={`${styles.toplink}`}>
                    <Link href={`/lbm`}>
                         🌟 La Baguette Magique
                    </Link>
                </ol>
                <ol className={`${styles.toplink}`}>
                    <Link href={`/smady`}>
                         🧿 Saint-Maur a des yeux
                    </Link>
                </ol>
                <ol className={styles.sublink}>
                    <Link href={`/smady/carte`}>
                         🧿 Carte
                    </Link>
                </ol>
                <ol className={styles.sublink}>
                    <Link href={`/smady/chapitre1`}>
                        🧿 Chapitre 1
                    </Link>
                </ol>
                <ol className={styles.sublink}>
                    <Link href={`/smady/chapitre2`}>
                        🧿 Chapitre 2
                    </Link>
                </ol>
                <ol className={styles.sublink}>
                    <Link href={`/smady/chapitre3`}>
                        🧿 Chapitre 3
                    </Link>
                </ol>
                <ol className={styles.sublink}>
                    <Link href={`/smady/chapitre4`}>
                        🧿 Chapitre 4
                    </Link>
                </ol>*/}
                
                <ul className={`${styles.toplink}`}>
                    <Link href={`/strudelrepl/`}>
                        Strudel REPL 🌀 
                    </Link>
                    <li className={`${styles.sublink}`}>
                        <Link href={`/strudelrepl/track1`}>
                            Track #1
                        </Link>
                    </li>
                    <li className={styles.sublink}>
                        <Link href={`/strudelrepl/track2`}>
                            Track #2
                        </Link>
                    </li>
                    <li className={styles.sublink}>
                        <Link href={`/strudelrepl/track3`}>
                            Track #3
                        </Link>
                    </li>
                    <li className={styles.sublink}>
                        <Link href={`/strudelrepl/track4`}>
                            Track #4
                        </Link>
                    </li>
                    <li className={styles.sublink}>
                        <Link href={`/strudelrepl/track5`}>
                            Track #5
                        </Link>
                    </li>
                    <li className={styles.sublink}>
                        <Link href={`/strudelrepl/track6`}>
                            Track #6
                        </Link>
                    </li>
                    <li className={styles.sublink}>
                        <Link href={`/strudelrepl/track7`}>
                            Track #7
                        </Link>
                    </li>
                    <li className={styles.sublink}>
                        <Link href={`/strudelrepl/track8`}>
                            Track #8
                        </Link>
                    </li>
                </ul>
                

        </nav>
    )
}