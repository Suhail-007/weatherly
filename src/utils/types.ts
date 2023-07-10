export interface coords {
    lat: string | string[] | undefined
    long: string | string[] | undefined
}

export interface userLocation {
    country: string
    state: string
}
export interface MainContentProps {
    bgImage?: string
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

export interface SidebarContentProps {
    main: any,
    clouds: {
        all: string
    },
    wind: {
        gust: string,
        speed: string
    }
    visibility: string
}
