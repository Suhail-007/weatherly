import Image from 'next/image'


import Card from '../../Layout/card';
import { MainContentProps } from '@/utils/types';

import loadingSpinner from '../../../public/assets/loading.svg';
import styles from './main-content.module.css';

const MainContent = function ({ data, bgImage }: MainContentProps) {
    let icon = '';

    if (!bgImage) {
        return (
            <Card bgImage={bgImage} className={styles.maincontent_loading}>
                <div className={styles.maincontent_info}>
                    <h1>Please wait</h1>
                    <h2>Loading</h2>
                    <p>Loading</p>
                    <p>Loading</p>
                </div>
                <Image className={styles.loading_spinner} fill={true} src={loadingSpinner} alt='loading' />
            </Card>
        )
    }

    const { state, country } = data?.location;
    const { temp } = data?.todayWeather.main;
    const { description, main } = data?.todayWeather.weather[0];

    const weatherCondition = main.toLowerCase();

    if (weatherCondition === 'clouds') icon = '/assets/cloudy.svg';
    if(weatherCondition === 'rain') icon = '/assets/rainy.svg';
    
        return (
            <Card bgImage={bgImage} className={styles.maincontent}>
                <div className={styles.maincontent_info}>
                    <h1>{Math.trunc(temp)} °C</h1>
                    <h2>{main}</h2>
                    <p className={styles.maincontent__desc}>{description}</p>
                    <p><span>{state}</span>, <span>{country}</span></p>
                </div>
                <div className={styles.svg_cont}>
                    <Image fill={true} src={icon} alt={description} />
                </div>
            </Card>
        )
}

export default MainContent