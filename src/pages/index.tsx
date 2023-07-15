import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { useState, useEffect, MouseEvent } from 'react';

import Main from '@/components/Main/main';
import Header from '@/Layout/header';
import { data } from '@/utils/types';

import styles from './index.module.css';

export default function Home({ eee }: InferGetServerSidePropsType<typeof getServerSideProps>) {
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

type Repo = {
    eee: string
}

export const getServerSideProps: GetServerSideProps = async function ({ req, res }) {

    return {
        props: {
            eee: 'what'
        }
    }
}