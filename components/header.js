import Logo from './logo'
import Nav from 'components/nav'
import styles from 'styles/header.module.css'

export default function Header() {
    return (
        <div className={styles.flexContainer}>
            <Logo boxOn/>
            <Nav />
        </div>
    )
}