import Image from "next/image"

import styles from './loading.module.css';

export default function Loading() {
    return (
        <Image priority={true} className={`${styles.loading_spinner}`} src='/assets/loading.svg' alt='loading' fill={true} />
    )
}
