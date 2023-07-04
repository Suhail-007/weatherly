import Image from 'next/image'


import Card from '../../Layout/card';
import { MainContentProps } from '@/utils/types';

import loadingSpinner from '../../../public/assets/loading.svg';
import styles from './main-content.module.css';

const MainContent = function ({ img, city, temperature, wind, weather, country, bgImage }: MainContentProps) {

    if (!bgImage) {
        return (
            <Card bgImage={bgImage} className={styles.maincontent_loading}>
                <div className={styles.maincontent_info}>
                    <h1></h1>
                    <h2></h2>
                    <p></p>
                    <p></p>
                </div>
                <Image className={styles.loading_spinner} fill={true} src={loadingSpinner} alt='loading' />
            </Card>
        )
    }

    return (
        <Card bgImage={bgImage} className={styles.maincontent}>
            <div className={styles.maincontent_info}>
                <h1>{temperature}</h1>
                <h2>{weather}</h2>
                <p>{city}, {country}</p>
                <p>{wind}</p>
            </div>
            <div className={styles.svg_cont}>
                <Image fill={true} src={img} alt={weather} />
            </div>
        </Card>
    )
}

export default MainContent