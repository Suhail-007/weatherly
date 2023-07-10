import Card from '@/Layout/card';

import styles from './sidebar-content.module.css';

interface sidebarContentProps {
    main: any,
    clouds: {
        all: string
    },
    sys: any,
    wind: {
        gust: string,
        speed: string
    }
    visibility: string
}

export default function SidebarContent({ main, clouds, sys, wind, visibility }: sidebarContentProps) {
    return (
        <div className={styles.weather_details}>
            <Card className={styles.weather_details_card}>
                <p>temp : <span>{main.temp} °C</span></p>
                <p>feels like : <span>{main['feels_like']} °C</span></p>
                <p>humidity : <span>{main.humidity}%</span></p>
            </Card>
            <Card className={styles.weather_details_card}>
                <p>clouds : <span>{clouds.all} %</span></p>
            </Card>
            <Card className={styles.weather_details_card}>
                <p>Gust : <span>{wind.gust} m/s</span></p>
                <p>Speed : <span>{wind.speed} m/s</span></p>
            </Card>
            <Card className={styles.weather_details_card}>
                <p>visibility : <span> {visibility} km</span></p>
            </Card>
        </div>
    )
}
