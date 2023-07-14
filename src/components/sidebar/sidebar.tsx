import { useState, MouseEvent, ChangeEvent } from 'react';

import SidebarContent from './sidebar-content';

import { SidebarProps } from '@/utils/types';

import styles from './sidebar.module.css';

export default function Sidebar({ isActive, closeSidebar, data, updateData }: SidebarProps) {
    const [value, setValue] = useState<string>('');

    if (!data) return

    const inputHandler = function (e: ChangeEvent<HTMLInputElement>) {
        if (e.currentTarget.value.trim() === '') return

        setValue(e.currentTarget.value);
    }


    const { clouds, main, wind, visibility } = data;

    const searchWeather = async function (e: MouseEvent<HTMLFormElement | undefined>) {
        e.preventDefault();

        try {
            const state = 'london';
            // console.log(state)
            const res = await fetch(`/api/search?state=${state}`);
            const data = await res.json();

            updateData(data);
            setValue('');

        } catch (err: any) {
            console.log(err)
        }
    }

    return (
        <section className={isActive ? styles.sidebarActive : styles.sidebar}>
            <form onSubmit={searchWeather} className={styles.sidebar_search_cont}>
                <input value={value} onChange={inputHandler} name="state" type='search' required placeholder='Search state name...' />
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