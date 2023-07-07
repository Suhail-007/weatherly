export interface coords {
    lat: string | string[] | undefined
    long: string | string[] | undefined
}

export interface userLocation {
    country: string
    state: string
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
    bgImage: string | undefined
    data: D | undefined
}

export interface D {
    bgImage: string,
    weatherForecast: any
    todayWeather: any
    location: any
}

export type filteredDays = {

}
