import Card from '../Layout/card';
import styles from './main.module.css';

export default function Main() {
    return (
        <section className={styles.section}>
            <Card>
                <div>
                Icon
                </div>
                <div>
                    <h1>City</h1>
                    <h2>temperature</h2>
                    <p>wind</p>
                </div>
            </Card>
        </section>
    )
}