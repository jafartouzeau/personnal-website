import styles from './side-menu.module.css';
import Link from "next/link";

export default function SideMenu({page, links}:{page:string, links:string[]}) {
    return (
        <menu className={styles.menu}>
            {links.map((link) => (
                <ol key={link} className={styles.ol}>
                    <Link href={`/${page}/${link}`}>
                        {link}
                    </Link>
                </ol>
            ))}
        </menu>
    )
}