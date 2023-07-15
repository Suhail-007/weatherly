import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import weatherSliceReducer from "./weatherSlice";
import { createWrapper } from 'next-redux-wrapper';

const store = () => {
    return configureStore({
        reducer: {
            weather: weatherSliceReducer,
        },
        devTools: true,
    })
}

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType> = ThunkAction<ReturnType, AppState, unknown,Action>

export const wrapper = createWrapper<AppStore>(store);