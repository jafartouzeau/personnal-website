import styles from './side-menu.module.css';
import Link from "next/link";

type link = {
    url:string,
    name:string
}

export default function SideMenu({links}:{links:link[]}) {
    return (
        <menu className={styles.menu}>
            {links.map((link) => (
                <ol key={link.name} className={styles.ol}>
                    <Link href={link.url}>
                        {link.url}
                    </Link>
                </ol>
            ))}
        </menu>
    )
}