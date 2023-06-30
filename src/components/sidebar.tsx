import { MouseEventHandler } from 'react';
import styles from './sidebar.module.css';

export default function Sidebar({isActive, closeSidebar}: {isActive: boolean, closeSidebar: {closeSidebar: MouseEventHandler<HTMLButtonElement>}}) {


    return (
        <section className={isActive ? styles.sidebarActive : styles.sidebar}>
            <div className={styles.sidebar_content}>
                <input type='search' placeholder='Search your city name...' />
                <button>
                    <svg>
                        <use href='/assets/search.svg#searchicon'></use>
                    </svg>
                </button>
            </div>

            <button onClick={closeSidebar} className={styles.sidebar_closebtn}>Close</button>
        </section>
    )
}