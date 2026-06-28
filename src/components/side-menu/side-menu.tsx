import styles from './side-menu.module.css';
import Link from "next/link";

export default function SideMenu({data}:{data:Record<string, any>}) {
    return (
        <menu className={styles.menu}>
            {Object.entries(data).map(([name, sideMenuData]) => (
                <ol key={name} className={styles.ol}>
                    <Link href={`/strudelrepl/${name}`}>
                        {sideMenuData.title}
                    </Link>
                </ol>
            ))}
        </menu>
    )
}