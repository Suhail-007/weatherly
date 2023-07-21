import { MouseEvent } from 'react';

import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/store';
import { openSidebar } from '../store/weatherSlice';

import Menu from './menu';

import styles from './header.module.css';

export default function Header() {

    const { isSidebarActive } = useAppSelector(state => state.weather);
    const dispatch = useDispatch()

    const onClickHandler = function (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
        const parentId = e.currentTarget.closest('#sidebar')?.id;

        if (parentId !== 'sidebar') return
        dispatch(openSidebar())
    }

    return (
        <header className={styles.header}>
            <div className={styles.header__icon}>
                <svg>
                    <use href='/assets/logo.svg#logo'></use>
                </svg>
            </div>

            <div>
                <Menu openSidebar={onClickHandler} />
            </div>
        </header>
    )
}