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
                    <Link href={`/bass/`}>
                        Bass Tabs 
                    </Link>
                    <li className={styles.sublink}>
                        <Link href={`/bass#`}>
                            Daft Punk - Veridis Quo
                        </Link>
                    </li>
                </ul>
                
                <ul className={`${styles.toplink}`}>
                    <Link href={`/strudelrepl/`}>
                        Strudel REPL 🌀 
                    </Link>
                    <li className={styles.sublink}>
                        <Link href={`/strudelrepl/track4`}>
                            Daft Punk - Veridis Quo
                        </Link>
                    </li>
                    {/*<li className={`${styles.sublink}`}>
                        <Link href={`/strudelrepl/track1`}>
                            Indochine - La vie est belle
                        </Link>
                    </li>*/}
                    <li className={styles.sublink}>
                        <Link href={`/strudelrepl/track5`}>
                            Moderat - A new error
                        </Link>
                    </li>
                    <li className={styles.sublink}>
                        <Link href={`/strudelrepl/track2`}>
                            FOTF - Track #1 (Acid)
                        </Link>
                    </li>
                    <li className={styles.sublink}>
                        <Link href={`/strudelrepl/track3`}>
                            FOTF - Track #3 (Samples)
                        </Link>
                    </li>
                    <li className={styles.sublink}>
                        <Link href={`/strudelrepl/track6`}>
                            FOTF - Track #3 (Chords)
                        </Link>
                    </li>
                    <li className={styles.sublink}>
                        <Link href={`/strudelrepl/track7`}>
                            FOTF - Track #4 (Popper)
                        </Link>
                    </li>
                    <li className={styles.sublink}>
                        <Link href={`/strudelrepl/track8`}>
                            FOTF - Track #5 (Apero billevesé)
                        </Link>
                    </li>
                    <li className={styles.sublink}>
                        <Link href={`/strudelrepl/track9`}>
                            FOTF - Track #6
                        </Link>
                    </li>
                </ul>
                

        </nav>
    )
}