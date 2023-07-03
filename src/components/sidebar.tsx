import { MouseEventHandler } from 'react';
import styles from './sidebar.module.css';

export default function Sidebar({isActive, closeSidebar}: {isActive: boolean, closeSidebar: MouseEventHandler<HTMLButtonElement>}) {


    return (
        <section className={isActive ? styles.sidebarActive : styles.sidebar}>
            <form className={styles.sidebar_search_cont}>
                <input type='search' placeholder='Search city name...' />
                <button>
                    <svg>
                        <use href='/assets/search.svg#searchicon'></use>
                    </svg>
                </button>
            </form>

            <button onClick={closeSidebar} className={styles.sidebar_closebtn}>Close</button>
        </section>
    )
}