import styles from './side-menu.module.css';
import Link from "next/link";
import {strudelData} from '@/app/strudelrepl/data';


export default function SideMenu() {
    return (
        <nav className={styles.nav}>
             <ol className={styles.ol}>
                <Link href={"/"}>
                    Accueil
                </Link>
            </ol>
            <ol className={styles.ol}>
                <Link href={"/photos"}>
                    Photos
                </Link>
            </ol>
            <ol className={styles.ol}>
                Strudel Repl
                {Object.entries(strudelData).map(([name, strudelMusicData]) => (
                    <ol key={name} className={styles.subol}>
                        <Link href={`/strudelrepl/${name}`}>
                            {strudelMusicData.title}
                        </Link>
                    </ol>
                ))}
            </ol>
        </nav>
    )
}