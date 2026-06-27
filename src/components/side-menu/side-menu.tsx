import styles from './side-menu.module.css';
import Link from "next/link";

export default function SideMenu() {
    return (
        <nav className={styles.nav}>
             <ol className={styles.li}>
                <Link href={"/"}>
                    Accueil
                </Link>
            </ol>
            <ol className={styles.li}>
                <Link href={"/musique"}>
                    Musique
                </Link>
            </ol>
        </nav>
    )
}