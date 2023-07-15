import { MouseEventHandler, MouseEvent } from 'react';

export interface Weather {
    description: string,
    main: string,
}

export type weatherForecastList = {
    clouds: {
        all: string
    },

    main: {
        feels_like: string,
        temp: string,
        humidity: string
    },
    wind: {
        speed: string,
        gust: string
    },
    weather: Weather[],
}

export interface weatherForecast {
    list: weatherForecastList[]
}

export interface todayWeather extends SidebarContentProps {
    weather: Weather[],
}

export interface coords {
    lat: string | string[] | undefined
    long: string | string[] | undefined
}

export interface userLocation {
    country: string
    state: string
}
export interface data {
    bgImage?: string,
    weatherForecast: weatherForecast,
    todayWeather: todayWeather,
    location: userLocation,
}

export type MainProps = {
    data: data | undefined,
    isActive: boolean;
    closeSidebar: () => void,
    updateData: (data: data) => void
}

export interface MainContentProps {
    data: data | undefined
}

export interface filteredDays {
    dt_txt: string
    main: {
        temp: string
    }
    weather: Weather[]
}

export interface SidebarProps {
    isActive: boolean,
    closeSidebar: () => void,
    data: todayWeather | undefined,
    updateData: (data: data) => void
}

export interface SidebarContentProps {
    main: {
        temp: number,
        feels_like: number,
        humidity: string
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