import MainContent from './main-content';

import styles from './main.module.css';
import Sidebar from '../sidebar/sidebar';
import DaysCard from '../days/dayCards';

import { MainProps } from '@/utils/types';

export default function Main({ data, isActive, closeSidebar, updateData }: MainProps) {

    return (
        <section className={styles.section__main}>
            <MainContent data={data} />
            <Sidebar updateData={updateData} data={data?.todayWeather} closeSidebar={closeSidebar} isActive={isActive} />
            <DaysCard data={data} />
        </section>
    )
}