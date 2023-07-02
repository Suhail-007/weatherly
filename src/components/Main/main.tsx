import { MouseEventHandler } from 'react';
import MainContent from './main-content';

import styles from './main.module.css';
import Sidebar from '../sidebar';
import DaysCard from '../daysCard';

interface weatherInfo {
    weather: string
    img: string
    city: string
    temperature: string
    wind: string
    country: string
}

const weahterInfo: weatherInfo = {
    img: '/assets/cloudy.svg',
    weather: 'cloudy',
    temperature: '30 °C',
    city: 'Delhi',
    wind: '32km/h',
    country: 'fdd'
}

export default function Main({ image, isActive, closeSidebar }: {
    image: string, isActive: boolean, closeSidebar: MouseEventHandler<HTMLButtonElement>}) {

    return (
        <section className={styles.section__main}>
            <MainContent bgImage={image} {...weahterInfo} />
            <Sidebar closeSidebar={closeSidebar} isActive={isActive} />
            <DaysCard />
        </section>
    )
}