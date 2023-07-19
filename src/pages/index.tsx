import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { useState, useEffect, MouseEvent } from 'react';

import Main from '@/components/Main/main';
import Header from '../Layout/Header';
import { data } from '@/utils/types';

import styles from './index.module.css';
import { wrapper } from '../store/store';
import { weatherActions } from '@/store/weatherSlice'

export default function Home({ weather }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [data, setData] = useState<data>();
    const [error, setError] = useState('');

    useEffect(() => {

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(location => {
                const { latitude, longitude } = location.coords;

                fetch(`/api/homepage?lat=${latitude}&long=${longitude}`)
                    .then(res => res.json())
                    .then(data => setData(data))
                    .catch((err: any) => setError(err))
            });
        } else {
            console.log('App won\'t work as expected.')
        }
    }, []);

    const openSidebar = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        const parentId = e.currentTarget.closest('#sidebar')?.id;

        if (parentId !== 'sidebar') return
        setIsSidebarActive(true);
    }

    const closeSidebar: () => void = () => {
        setIsSidebarActive(false);
    }

    const updateData = function (data: data) {
        setData(data);

    }

    return (
        <>
            <Header openSidebar={openSidebar} />
            <main className={styles.main}>
                <Main updateData={updateData} data={data} closeSidebar={closeSidebar} isActive={isSidebarActive} />
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {

    store.dispatch(weatherActions.setWeather());
    const i = store.getState()

    return {
        props: {
            weather: i.weather
        }
    }
})