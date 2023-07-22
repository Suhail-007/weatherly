import Head from 'next/head';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';

import Main from '@/components/Main/main';
import Header from '../Layout/Header';
import { data } from '@/utils/types';
import { wrapper } from '../store/store';

import styles from './index.module.css';

export default function Home({ initialState
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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

    const updateData = function (data: data) {
        setData(data);
    }

    return (
        <>
            <Head>
                <title>Weatherly</title>
            </Head>
            <Header />
            <main className={styles.main}>
                <Main updateData={updateData} data={data} />
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({ req }) => {
    const requestIp = require('request-ip');

    const ip = requestIp.getClientIp(req);

    return {
        props: {
            
        }
    }
})