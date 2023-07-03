import Image from 'next/image'

import Card from '../../Layout/card';
import styles from './main-content.module.css';
import { useEffect } from 'react';


interface weatherInfo {
    weather: string
    img: string
    city: string
    temperature: string
    wind: string
    bgImage: string | undefined
    country: string
}

const MainContent = function ({ img, city, temperature, wind, weather, country, bgImage }: weatherInfo) {

    return (
        <Card bgImage={bgImage} className={styles.maincontent}>
            <div className={styles.maincontent__info}>
                <h1>{temperature}</h1>
                <h2>{weather}</h2>
                <p>{city}, {country}</p>
                <p>{wind}</p>
            </div>
            <div className={styles.svg__cont}>
                <Image fill={true} src={img} alt={weather} />
            </div>
        </Card>
    )
}

export default MainContent