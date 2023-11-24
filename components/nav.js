import Link from 'next/link'
import styles from 'styles/nav.module.css'

export default function Nav() {
    return (
        <nav>
            <ul>
                <li className={styles.list}>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    )
}