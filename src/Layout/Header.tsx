import styles from './header.module.css';
import logo from '../../public/assets/logo.svg';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__icon}>
                <svg>
                    <use href='/assets/logo.svg#logo'></use>
                </svg>
            </div>

            <div>
                sidebar
            </div>
        </header>
    )
}