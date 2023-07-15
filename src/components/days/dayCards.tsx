import { v4 as uuidv4 } from 'uuid'

import DayContent from './dayContent';
import Loading from '../loader/loading';

import { weatherForecast, Weather, filteredDays } from '@/utils/types';

import styles from './daycards.module.css';

const getDate = function () {
    const todayDate = new Date()
    const year = todayDate.getFullYear();
    const day = todayDate.getDate();
    const month = todayDate.getMonth();

    return `${year}-${month + 1}-${day}`
}

const DaysCard = function ({ weatherForecast }: { weatherForecast: weatherForecast | undefined }) {

    const filterDays = function () {
        const filteredDays: filteredDays[] = [];
        let todayDate = new Date()
        let year = todayDate.getFullYear();
        let currDate = todayDate.getDate();
        let currMonth = todayDate.getMonth();

        console.log(weatherForecast)

        weatherForecast?.list.forEach((day: any, index: number) => {

            const sliceDate: string = day['dt_txt'].slice(0, 10);
            const twoDigitCurrDate = currDate < 10 ? '0' + (currDate) : currDate;
            const twoDigitCurrMonth = currMonth < 10 ? '0' + (currMonth + 1) : currMonth + 1;
            const currDateString = `${year}-${twoDigitCurrMonth}-${twoDigitCurrDate}`;

            if (sliceDate === currDateString) return

            const isIncluded = filteredDays.find((date) => date['dt_txt'].slice(0, 10) === sliceDate);

            if (sliceDate !== currDateString && !isIncluded) {
                filteredDays.push(day);
            }
        });
        return filteredDays
    }

    const filteredDays = filterDays();

    if (!filteredDays) return <Loading />

    return (
        <section className={styles.daysCard_section} >
            <h2>Upcoming 5 days</h2>

            <hr className={styles.hr} />
            <div className={styles.daysCard_cont}>
                <DayContent filteredDays={filteredDays} />
            </div>
        </section>
    )
}

export default DaysCard