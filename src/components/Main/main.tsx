import { MouseEventHandler } from 'react';
import MainContent from './main-content';

import styles from './main.module.css';
import Sidebar from '../sidebar';
import DaysCard from '../daysCard';

import { weatherInfo, D as data } from '@/utils/types'

const weahterInfo: weatherInfo = {
    img: '/assets/cloudy.svg',
    weather: 'cloudy',
    temperature: '30 °C',
    city: 'Delhi',
    wind: '32km/h',
    country: 'fdd'
}

export default function Main({ data, image, isActive, closeSidebar }: {
    image: string | undefined, isActive: boolean, closeSidebar: MouseEventHandler<HTMLButtonElement>,
    data: data | undefined
}) {

    console.log(data)

    return (
        <section className={styles.section__main}>
            <MainContent bgImage={image} {...weahterInfo} />
            <Sidebar closeSidebar={closeSidebar} isActive={isActive} />
            <DaysCard />
        </section>
    )
}