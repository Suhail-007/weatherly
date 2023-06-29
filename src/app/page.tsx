import Main from '../components/Main/main';
import Header from '../Layout/header';

import styles from './page.module.css';

export default function Home() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Main />
            </main>
        </>
    )
}