import styles from './sidebar.module.css';

export default function Sidebar() {

    return (
        <section className={styles.sidebar}>
            <div className={styles.sidebar_content}>
                <input type='search' placeholder='Search your city name...' />
                <button>
                    <svg>
                        <use href='/assets/search.svg#searchicon'></use>
                    </svg>
                </button>
            </div>
        </section>
    )
}