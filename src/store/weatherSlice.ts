import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface WeatherSlice {
    isSidebarActive: boolean,
}

const initialState = {
    isSidebarActive: false,
} as WeatherSlice

export const weatherSlice = createSlice({
    name: "weather",
    initialState,

    reducers: {
        //actions 
        openSidebar: (state) => {
            state.isSidebarActive = true;
        },

        closeSidebar: (state) => {
            state.isSidebarActive = false;
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

export const { openSidebar, closeSidebar } = weatherSlice.actions;
export default weatherSlice.reducer;