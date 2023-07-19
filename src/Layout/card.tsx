import styles from './card.module.css';

type CardProps = {
    children: React.ReactNode,
    className?: string,
    bgImage?: string,
}

const Card: React.FC<CardProps> = function ({ children, className, bgImage }) {

    return (
        <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0, .2)), url('${bgImage}')` }} className={`${styles.card} ${className}`}>
            {children}
        </div>
    )
}

export default Card