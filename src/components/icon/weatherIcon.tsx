import Image from 'next/image';

interface weatherCondition {
    weather: string,
    icon: string
}

const weatherCondition: weatherCondition[] = [
    {
        weather: 'clouds',
        icon: '/assets/cloudy.svg'
    },
    {
        weather: 'rain',
        icon: '/assets/rainy.svg'
    },
    {
        weather: 'haze',
        icon: '/assets/haze.svg'
    },
    {
        weather: 'mist',
        icon: '/assets/haze.svg'
    },
    {
        weather: 'drizzle',
        icon: '/assets/drizzle.svg'
    }
]

export default function WeatherIcon({ weather }: { weather: string }) {
    const weatherLC = weather.toLocaleLowerCase();

    const weatherConditionArr = weatherCondition.filter(condition => condition.weather === weatherLC);

    return (
        <>
            {
                weatherConditionArr.length > 0 && <Image
                    src={weatherConditionArr[0].icon || ''}
                    alt={weatherConditionArr[0].weather || 'weather'}
                    width={100}
                    height={100}
                />
            }
        </>
    )
}