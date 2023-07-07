import Image from 'next/image';

export default function WeatherIcon({ weather }: { weather: string }) {
    let icon = '';
    const weatherCondition = weather.toLocaleLowerCase();

    if (weatherCondition === 'clouds') icon = '/assets/cloudy.svg';
    if (weatherCondition === 'rain') icon = '/assets/rainy.svg';

    return <Image src={icon} alt={weatherCondition} width={100} height={100} />
}
