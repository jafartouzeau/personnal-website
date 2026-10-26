"use client";

import Link from 'next/link';
import styles from './menu.module.css';
import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { tabs } from '@/app/bass/data';
import { strudelData } from '@/app/strudelrepl/data';

export default function Menu() {
    
    const pathname = usePathname();

    const navbarRef = useRef<HTMLElement>(null);
    const toggleRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
            const closeMenu = () => {
                navbarRef.current?.classList.remove(styles.active);
                toggleRef.current?.classList.remove(styles.active);
            };

            window.addEventListener("hashchange", closeMenu);
            return () => window.removeEventListener("hashchange", closeMenu);
        }, []);

    // Referme le menu quand on change de page
    useEffect(() => {
        navbarRef.current?.classList.remove(styles.active);
        toggleRef.current?.classList.remove(styles.active);
        if (!window.location.hash) {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    }, [pathname]);

    useEffect(() => {
        const navbar = navbarRef.current;
        if (!navbar) return;

        const mq = window.matchMedia("(max-width: 768px)");
        let lastScrollTop = 0;

        const handleScroll = () => {
            // Sur ordi : le menu reste fixe sur le côté
            if (!mq.matches) {
                navbar.style.top = "";
                return;
            }

            const scrollTop = Math.floor(
                window.scrollY || document.documentElement.scrollTop,
            );

            // Si le menu est ouvert, on ne le cache pas
            if (scrollTop < lastScrollTop || navbar.classList.contains(styles.active)) {
                navbar.style.top = "0";
            } else if (scrollTop > lastScrollTop) {
                navbar.style.top = `-${navbar.clientHeight}px`;
            }

            lastScrollTop = scrollTop;
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("touchmove", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchmove", handleScroll);
        };
    }, []);

    return (
                           
        <>
           <nav id="navbar"
                className={styles.menu}
                ref={navbarRef}
                onClick={(e) => {
                    if ((e.target as HTMLElement).closest("a")) {
                        navbarRef.current?.classList.remove(styles.active);
                        toggleRef.current?.classList.remove(styles.active);
                    }
                }}>
                <div className={styles.navHeader}>
                     <Link href={"/"}>
                        <div className={styles.logoContainer}>
                            <span className={styles.logo}>J∀F∀R</span>{/*∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀J∀F∀R∀</span>*/}
                        </div>
                    </Link>
                    <div
                        ref={toggleRef}
                        className={styles.menuToggle}
                        onClick={() => {
                            navbarRef.current?.classList.toggle(styles.active);
                            toggleRef.current?.classList.toggle(styles.active);
                        }}
                    >
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </div>
                </div>

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

                <ul className={`${styles.toplink}`}>
                    <Link href={`/bass`}>
                        Bass TABS 
                    </Link>
                    {[...tabs].sort((a, b) =>
                                a.bpm - b.bpm || a.artist.localeCompare(b.artist, "fr")
                            )
                            .map((tab) => (
                                <li className={styles.sublink} key={tab.id}>
                                    {/*<Link href={`/bass#${tab.id}`}>*/}
                                    <Link href=''>
                                        {tab.artist} - {tab.title} ({tab.bpm}bpm)
                                    </Link>
                                </li>
                            ))}
                </ul>

                <ul className={`${styles.toplink}`}>
                    <Link href={`/strudelrepl/`}>
                        Strudel REPL 🌀 
                    </Link>
                    {Object.entries(strudelData).map(([url, strudel]) => (
                        <li className={styles.sublink} key={url}>
                                    <Link href={`/strudelrepl/${url}`}>
                                        {strudel.artist} - {strudel.title}
                                    </Link>
                                </li>
                    ))
                    }

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

        </nav>
        <div className={styles.fakeNavbar}></div>
        </>
    )
}