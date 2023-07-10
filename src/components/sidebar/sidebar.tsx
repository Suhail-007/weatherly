import { MouseEventHandler } from 'react';
import styles from './sidebar.module.css';
import SidebarContent from './sidebar-content';

export default function Sidebar({ isActive, closeSidebar, data }: { isActive: boolean, closeSidebar: MouseEventHandler<HTMLButtonElement>, data: any }) {

    if (!data) return

    const { clouds, main, wind, visibility } = data;

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

            <SidebarContent visibility={visibility} main={main} clouds={clouds} wind={wind} />

            <button onClick={closeSidebar} className={styles.sidebar_closebtn}>Close</button>
        </section>
    )
}