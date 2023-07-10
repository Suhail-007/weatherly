import { MouseEventHandler } from 'react';
import MainContent from './main-content';

import styles from './main.module.css';
import Sidebar from '../sidebar/sidebar';
import DaysCard from '../daysCard';

import { D as data } from '@/utils/types'

export default function Main({ data, image, isActive, closeSidebar }: {
    image: string | undefined, isActive: boolean, closeSidebar: MouseEventHandler<HTMLButtonElement>,
    data: data | undefined
}) {

    return (
        <section className={styles.section__main}>
            <MainContent data={data} bgImage={image} />
            <Sidebar data={data?.todayWeather} closeSidebar={closeSidebar} isActive={isActive} />
            <DaysCard data={data} />
        </section>
    )
}