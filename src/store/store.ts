import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import weatherSliceReducer from "./weatherSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

const createStore = () => configureStore({
    reducer: {
        weather: weatherSliceReducer,
    },
    devTools: true,
})

export type AppStore = ReturnType<typeof createStore>
export type RootState = ReturnType<AppStore['getState']>;
// export type AppDispatch = typeof RootState['dispatch'];

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(createStore);