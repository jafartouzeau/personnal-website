'use client';

import styles from './side-menu.module.css';
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from 'react';

const LOGO_UNIT = "J∀F∀R∀";

export default function SideMenu() {

    const containerRef = useRef<HTMLDivElement>(null);
    const [repeatedText, setRepeatedText] = useState(LOGO_UNIT);

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const measure = document.createElement('span');
        measure.style.visibility = 'hidden';
        measure.style.position = 'absolute';
        measure.style.whiteSpace = 'nowrap';
        measure.className = styles.w;
        measure.textContent = LOGO_UNIT;
        container.appendChild(measure);
        const unitWidth = measure.offsetWidth || 1;
        container.removeChild(measure);

        const containerWidth = container.offsetWidth;
        const repeats = Math.ceil(containerWidth / unitWidth) + 1;
        setRepeatedText(LOGO_UNIT.repeat(repeats));
    }, []);

    return (
        <nav className={styles.menu}>
            
            <Link href={"/"}>
                <div ref={containerRef} className={styles.container}>
                <span className={styles.w}>{repeatedText}</span>
                </div>
            </Link>


                <ol className={`${styles.toplink}`}>
                    <Link href={`/kiwis`}>
                    Kiwis
                    </Link>
                </ol>
                <hr></hr>
                <ol className={styles.sublink}>
                    <Link href={`/kiwis/formatcarre`}>
                        🥝 Format carré
                    </Link>
                </ol>
                <ol className={styles.sublink}>
                    <Link href={`/kiwis/comicstrip`}>
                        🥝 Comic strip
                    </Link>
                </ol>
                <ol className={styles.sublink}>
                    <Link href={`/kiwis/posters`}>
                        🥝 Posters
                    </Link>
                </ol>
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
                
                <ol className={`${styles.toplink}`}>
                    <Link href={`/strudelrepl/`}>
                        Strudel REPL
                    </Link>
                </ol>
                <hr></hr>
                <ol className={`${styles.sublink}`}>
                    <Link href={`/strudelrepl/track1`}>
                        🌀 Track #1
                    </Link>
                </ol>
                <ol className={styles.sublink}>
                    <Link href={`/strudelrepl/track2`}>
                        🌀 Track #2
                    </Link>
                </ol>
                <ol className={styles.sublink}>
                    <Link href={`/strudelrepl/track3`}>
                        🌀 Track #3
                    </Link>
                </ol>
                <ol className={styles.sublink}>
                    <Link href={`/strudelrepl/track4`}>
                        🌀 Track #4
                    </Link>
                </ol>
                <ol className={styles.sublink}>
                    <Link href={`/strudelrepl/track5`}>
                        🌀 Track #5
                    </Link>
                </ol>
                <ol className={styles.sublink}>
                    <Link href={`/strudelrepl/track6`}>
                        🌀 Track #6
                    </Link>
                </ol>
                <ol className={styles.sublink}>
                    <Link href={`/strudelrepl/track7`}>
                        🌀 Track #7
                    </Link>
                </ol>
        </nav>
    )
}