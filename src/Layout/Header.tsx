import { MouseEvent } from 'react';
import Menu from './menu';

import styles from './header.module.css';

export default function Header({ openSidebar }: {openSidebar: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void}  ) {
    return (
        <header className={styles.header}>
            <div className={styles.header__icon}>
                <svg>
                    <use href='/assets/logo.svg#logo'></use>
                </svg>
            </div>

            <div>
                <Menu openSidebar={openSidebar} />
            </div>
        </header>
    )
}