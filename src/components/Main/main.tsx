import MainContent from './main-content';

import styles from './main.module.css';
import Sidebar from '../sidebar/sidebar';
import DaysCard from '../days/dayCards';

import { MainProps } from '@/utils/types';

export default function Main({ data, updateData }: MainProps) {

    return (
        <section className={styles.section__main}>
            <MainContent data={data} />
            <Sidebar updateData={updateData} data={data?.todayWeather} />
            <DaysCard weatherForecast={data?.weatherForecast} />
        </section>
    )
}