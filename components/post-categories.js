import styles from 'styles/post-body.module.css'
import Link from 'next/link'

export default function PostCategories({ categories }) {
    return (
        <div classname={styles.flexContainer}>
            <h3 classname={styles.heading}>
                <fontAwesomeIcon icon={faFolderOpen} />
                <span className="sr-only">Categories</span>
            </h3>
        <ul className={styles.list}>
            {categories.map(({ name, slug }) => (
                <li key={slug}>
                    <Link href={`/blog/category/${slug}`}>
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
        </div>
    )
}