import Card from '../../Layout/card';
import { MainContentProps } from '@/utils/types';

import styles from './main-content.module.css';
import Loading from '../loader/loading';
import WeatherIcon from '../icon/weatherIcon';

const MainContent = function ({ data }: MainContentProps) {
    if (!data?.bgImage) {
        return (
            <Card className={styles.maincontent_loading}>
                <div className={styles.maincontent_info}>
                    <h1>Please wait</h1>
                    <h2>Loading</h2>
                    <p>Loading</p>
                    <p>Loading</p>
                </div>
                <Loading />
            </Card>
        )
    }

    const { state, country } = data?.location;
    const { temp } = data?.todayWeather.main;
    const { description, main } = data?.todayWeather.weather[0];
    const date = new Date().toLocaleDateString('en-Us', {
        month: 'long',
        day: '2-digit',
        weekday: 'short',
        year: '2-digit'
    });

    return (
        <Card bgImage={data?.bgImage} className={styles.maincontent}>
            <div className={styles.maincontent_info}>
                <h1>{Math.trunc(temp)} °C</h1>
                <h2>{main}</h2>
                <p className={styles.maincontent__desc}>{description}</p>
                <p><span>{state}</span>, <span>{country}</span></p>
            </div>
            <div className={styles.svg_cont}>
                <h2>{date}</h2>
                <WeatherIcon weather={main} />
            </div>
        </Card>
    )
}

export default MainContent