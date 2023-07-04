export interface coords {
    lat: string | string[] | undefined,
    long: string | string[] | undefined,
}

export interface userLocation {
    country: string,
    state: string,
}

export interface weatherInfo {
    weather: string
    img: string
    city: string
    temperature: string
    wind: string
    country: string
}

export interface MainContentProps {
    weather: string
    img: string
    city: string
    temperature: string
    wind: string
    country: string
    bgImage: string | undefined
}

export interface D {
    bgImage: string,
    weatherForcast: {},
    todayWeather: {},
    location: {}
}