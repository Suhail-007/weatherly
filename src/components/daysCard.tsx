import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid'

import Card from '../Layout/card';
import styles from './dayscard.module.css';

const dummyData = [
    {
        day: "Mon",
        icon: '/assets/cloudy-day.svg',
        temp: '23 C'
    },
    {
        day: "Mon",
        icon: '/assets/cloudy-day.svg',
        temp: '23 C'
    },
    {
        day: "Mon",
        icon: '/assets/cloudy-day.svg',
        temp: '23 C'
    },
    {
        day: "Mon",
        icon: '/assets/cloudy-day.svg',
        temp: '23 C'
    },
    {
        day: "Mon",
        icon: '/assets/cloudy-day.svg',
        temp: '23 C'
    },
];

const DaysCard = function () {

    const cards = dummyData.map(card => {
        return (
            <Card key={uuidv4()} className={styles.daysCard_card}>
                <div>
                    <h3>{card.day}</h3>
                    <h4>{card.temp}</h4>
                </div>

                <div>
                    <Image src={card.icon} alt={card.day} width={100} height={100} />
                </div>
            </Card>

        )
    });

    return (
        <section className={styles.daysCard_section}>
            <h2>Upcoming 5 days</h2>

            <hr className={styles.hr} />
            <div className={styles.daysCard_cont}>
                {cards}
            </div>
        </section>
    )
}

export default DaysCard