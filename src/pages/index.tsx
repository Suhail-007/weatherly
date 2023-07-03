
import { useState, useEffect, MouseEvent, MouseEventHandler } from 'react';

import Main from '@/components/Main/main';
import Header from '../Layout/header';
import styles from './index.module.css';

type D = {
    bgImage: string,
    weatherForcast: {},
    todayWeather: {},
    location: {}
}


export default function Home() {
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [data, setData] = useState<D>();
    const [error, setError] = useState('');

    useEffect(() => {

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(location => {
                const { latitude, longitude } = location.coords;

                fetch(`/api/homepage?lat=${latitude}&long=${longitude}`)
                    .then(res => res.json())
                    .then(data => setData(data))
                    .catch((err: any) => {
                        setError(err);
                    })
            })
        } else {
            console.log('App won\'t work as expected.')
        }
    }, []);

    const openSidebar = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        const parentId = e.currentTarget.closest('#sidebar')?.id;

        if (parentId !== 'sidebar') return
        setIsSidebarActive(true);
    }

    const closeSidebar: MouseEventHandler<HTMLButtonElement> = () => {
        setIsSidebarActive(false);
    }

    return (
        <>
            <Header openSidebar={openSidebar} />
            <main className={styles.main}>
                <Main closeSidebar={closeSidebar} isActive={isSidebarActive} image={data?.bgImage} />
            </main>
        </>
    )
}