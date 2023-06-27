import MainContent from './main-content';

import { getRandomNum } from '../../../utils/helper';
import styles from './main.module.css';

interface weatherInfo {
    weather: string
    img: string
    city: string
    temperature: string
    wind: string
}

const weahterInfo: weatherInfo = {
    img: '/assets/cloudy.svg',
    weather: 'cloudy',
    temperature: '30 °C',
    city: 'Delhi',
    wind: '32km/h'
}

const getPhoto = async function (location: string) {
    const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${location}&client_id=T-wpXqtoeV9q15ndT6aqdpTAWtZbMtCHZTeRj_h0sS8`);
    const data = await res.json();
    const results = data.results;
    const arrayLength = Number(results.length);    
    const randomNum = getRandomNum(arrayLength);
    const randomImage = data.results[randomNum].urls.regular;

    return randomImage
}

export default async function Main() {
    const image = await getPhoto('delhi');

    return (
        <section className={styles.section__main}>
            <MainContent bgImage={image} {...weahterInfo} />
        </section>
    )
}