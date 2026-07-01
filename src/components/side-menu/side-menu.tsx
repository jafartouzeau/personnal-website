import styles from './side-menu.module.css';
import Link from "next/link";
import { ArtworkType } from "artwork"

export default function SideMenu({data}:{data:Record<string, ArtworkType[]>}) {
    return (
        <menu className={styles.menu}>
            {Object.entries(data).map(([folder, imagesArray]) => (
                <ol key={folder} className={styles.ol}>
                    <Link href={`/kiwis/${folder}`.toLowerCase()}>
                        {folder.charAt(0).toUpperCase() + folder.slice(1)}
                    </Link>
                </ol>
            ))}
        </menu>
    )
}