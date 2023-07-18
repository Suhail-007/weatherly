import Card from '@/Layout/card';

import styles from './sidebar-content.module.css';
import { SidebarContentProps } from '@/utils/types'

export default function SidebarContent({ main, clouds, wind, visibility }: SidebarContentProps) {
    return (
        <div className={styles.weather_details}>
            <Card className={styles.weather_details_card}>
                <p>temp : <span>{main.temp} </span>°C</p>
                <p>feels like : <span>{main['feels_like']} </span>°C</p>
            </Card>
            <Card className={`${styles.weather_details_card} ${styles.weather_hide}`}>
                <p>clouds : <span>{clouds.all} %</span></p>
            </Card>
            <Card className={`${styles.weather_details_card} ${styles.weather_hide}`}>
                <p>Gust : <span>{wind.gust} m/s</span></p>
                <p>Speed : <span>{wind.speed} m/s</span></p>
            </Card>
            <Card className={styles.weather_details_card}>
                <p>humidity : <span>{main.humidity}%</span></p>
                <p>visibility : <span> {visibility} km</span></p>
            </Card>
        </div>
    )
}
