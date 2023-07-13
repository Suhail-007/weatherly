import { v4 as uuid4 } from 'uuid';

import WeatherIcon from "../icon/weatherIcon";
import Card from '@/Layout/card';

import { filteredDays } from './../../utils/types';

import styles from './dayContent.module.css';


export default function DayContent({ filteredDays }: { filteredDays: filteredDays[] }) {
    const cards = filteredDays?.map((card) => {
        const { main, weather, } = card;
        const date = new Date(card['dt_txt']).toLocaleDateString('en-Us', {
            weekday: 'short',
            month: 'long',
            day: '2-digit'
        })

        return (
            <Card key={uuid4()} className={styles.daysCard_card}>
                <div className={styles.weather_info}>
                    <h3>{main.temp} °C</h3>
                    <h4>{weather[0].main}</h4>
                    <p>{weather[0].description}</p>
                </div>

                <div className={styles.weather_info_icon}>
                    <h2>{date}</h2>
                    <WeatherIcon weather={weather[0].main} />
                </div>
            </Card>

        )
    });


    return (
        <>
            {cards}
        </>
    )
}
