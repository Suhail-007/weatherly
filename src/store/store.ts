import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

const store = () => configureStore({
    reducer: {
        weather: weatherReducer,
    },
    devTools: true,
})


export type AppStore = ReturnType<typeof store>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;
export type RootState = ReturnType<AppStore['getState']>;
export const wrapper = createWrapper<AppStore>(store);

//Cutsom HOOKS
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch;


export default store
