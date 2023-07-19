import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface WeatherSlice {
    weather: boolean,
}

const initialState: WeatherSlice = {
    weather: true
}

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        //actions 
        setWeather(state) {
            state.weather = false;
        }
    },

    //special reducer for hydrating the state, Only for nextjs
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.weather
            }
        }
    }

})

export const weatherActions = weatherSlice.actions;
export default weatherSlice.reducer;