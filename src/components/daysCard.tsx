import { v4 as uuidv4 } from 'uuid'

import Card from '../Layout/card';
import styles from './dayscard.module.css';
import { D, filteredDays } from '@/utils/types';
import Loading from './loader/loading';
import WeatherIcon from './icon/weatherIcon';

const getDate = function () {
    const todayDate = new Date()
    const year = todayDate.getFullYear();
    const day = todayDate.getDate();
    const month = todayDate.getMonth();

    return `${year}-${month + 1}-${day}`
}

const DaysCard = function ({ data }: { data: D | undefined }) {

    const filterDays = function () {
        const filteredDays: filteredDays[] = [];
        let todayDate = new Date()
        let year = todayDate.getFullYear();
        let currDate = todayDate.getDate();
        let currMonth = todayDate.getMonth();

        data?.weatherForecast.list.forEach((day: any, index: number) => {


            const sliceDate: string = day['dt_txt'].slice(0, 10);
            const twoDigitCurrDate = currDate < 10 ? '0' + (currDate) : currDate;
            const twoDigitCurrMonth = currMonth < 10 ? '0' + (currMonth + 1) : currMonth + 1;
            const currDateString = `${year}-${twoDigitCurrMonth}-${twoDigitCurrDate}`;

            // if (newMonth === currMonth) return
            if (sliceDate === currDateString) return

            const isIncluded = filteredDays.find((date: any) => date['dt_txt'].slice(0, 10) === sliceDate);

            if (sliceDate !== currDateString && !isIncluded) {
                filteredDays.push(day);
            }
        });
        return filteredDays
    }

    const filteredDays = filterDays();

    if (!filteredDays) return (
        <Loading />
    )

    const cards = filteredDays?.map((card: any) => {
        const { main, weather, rain, } = card;
        const date = new Date(card['dt_txt']).toLocaleDateString('en-Us', {
            weekday: 'short',
            month: 'long',
            day: '2-digit'
        })

        return (
            <Card key={uuidv4()} className={styles.daysCard_card}>
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
        <section className={styles.daysCard_section} >
            <h2>Upcoming 5 days</h2>

            <hr className={styles.hr} />
            <div className={styles.daysCard_cont}>
                {cards}
            </div>
        </section>

    )
}

export default DaysCard