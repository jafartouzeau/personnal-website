import styles from './topbar.module.css';
import Link from "next/link";

export default function TopBar() {
    return (
        <nav className={styles.topbar}>
            <ol className={styles.ol}>
                <Link href={"/"}>
                    JAFAR
                </Link>
            </ol>
            <ol className={styles.ol}>
                <Link href={"/strudelrepl"}>
                Strudel REPL
                </Link>
            </ol>
        </nav>
        
    )
}