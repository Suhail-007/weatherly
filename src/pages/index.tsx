
import { getRandomNum } from '@/utils/helper';
import { GetServerSideProps } from 'next';
import { useState, MouseEvent, MouseEventHandler } from 'react';

import Main from '@/components/Main/main';
import Header from '../Layout/header';

import styles from './index.module.css';

export default function Home({ randomImage }: { randomImage: string }) {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const openSidebar = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        const parentId = e.currentTarget.closest('#sidebar')?.id;

        if (parentId !== 'sidebar') return
        setIsSidebarActive(true);
    }

    const closeSidebar:MouseEventHandler<HTMLButtonElement> = () => {
        setIsSidebarActive(false);
    }

    return (
        <>
            <Header openSidebar={openSidebar} />
            <main className={styles.main}>
                <Main closeSidebar={closeSidebar} isActive={isSidebarActive} image={randomImage} />
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const getPhoto = async function (location: string) {
        const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${location}&client_id=T-wpXqtoeV9q15ndT6aqdpTAWtZbMtCHZTeRj_h0sS8`);
        const data = await res.json();
        const results = data.results;
        const arrayLength = Number(results.length);
        const randomNum = getRandomNum(arrayLength);
        const randomImage = data.results[randomNum].urls.regular;

        return randomImage
    }
    const image = await getPhoto('india');

    return {
        props: {
            randomImage: image
        }
    }
}