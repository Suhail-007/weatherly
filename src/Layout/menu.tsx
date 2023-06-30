import { MouseEvent } from 'react'
import styles from './menu.module.css'

export default function Menu({ openSidebar }: { openSidebar: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void }) {

    return (
        <div id='sidebar' onClick={openSidebar} className={styles.menu_cont}>
            <div className={styles.firstrow}></div>
            <div className={styles.secondrow}></div>
            <div className={styles.thirdrow}></div>
        </div>
    )
} 