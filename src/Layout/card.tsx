import styles from './card.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { weatherActions } from '../store/weatherSlice';
import { AppState } from '../store/store';

type CardProps = {
    children: React.ReactNode,
    className?: string,
    bgImage?: string,
}

const Card: React.FC<CardProps> = function ({ children, className, bgImage }) {
    const { weather } = useSelector((state: AppState) => state.weather);
    const dispatch = useDispatch();

    dispatch(weatherActions.setWeather());


    return (
        <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0, .2)), url('${bgImage}')` }} className={`${styles.card} ${className}`}>
            {children}
        </div>
    )
}

export default Card