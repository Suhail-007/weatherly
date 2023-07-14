import { MouseEventHandler, MouseEvent } from 'react';

export interface Weather {
    description: string,
    main: string,
}

export interface todayWeather {
    main: {
        temp: string,
        feels_like: string,
        humidity: string
    },
    weather: Weather[],
    wind: {
        speed: string,
        gust: string
    },
    visibility: string,
}


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

export interface SidebarProps {
    isActive: boolean,
    closeSidebar: MouseEventHandler<HTMLButtonElement>,
    data: any,
    updateData: (data: D) => void
}

export interface SidebarContentProps {
    main: {
        temp: string,
        feels_like: string
    },
    clouds: {
        all: string
    },
    wind: {
        gust: string,
        speed: string
    }
    visibility: string
}

export interface MainProps {
    image: string | undefined,
    data: D | undefined,
    isActive: boolean;
    closeSidebar: MouseEventHandler<HTMLButtonElement>,
    updateData: (data: D) => void
}

export interface filteredDays {

    dt_txt: string
    main: {
        temp: string
    }
    weather: [{
        main: string,
        description: string
    }]

}
