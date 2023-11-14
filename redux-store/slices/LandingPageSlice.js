"use client";
import { createSlice } from '@reduxjs/toolkit';

export const MainWeatherSlice = createSlice({
    name: "MainWeather",
    initialState: {
        isLoading: null,
        data: null,
        error: {
            condition: false,
            message: ""
        },
    }, 
    reducers: {
        getMainWeather (state, action) {
            const payload = action.payload
            const currentData = payload.current;
            state.data = currentData;
        },
        setLoading (state, action){
            const payload = action.payload
            state.isLoading = payload
        },
        checkError (state, action) {
            const payload = action.payload;
            const { status, msg } = payload;
            state.error.condition = status;
            state.error.message = msg;
        }
    }
});

export const miniCardsSlice = createSlice({
    name: "miniCards",
    initialState: {
        isLoading: false,
        cities: {},
    },
    reducers: {
        getCityData (state, action) {
            const payload = action.payload
            console.log({ location: payload.location });
        },
        setLoading (state, action){
            const payload = action.payload
            state.isLoading = payload
        }
    }
});

/* `const MainWeatherAction = MainWeatherSlice.actions;` is assigning the `actions` object from the
`MainWeatherSlice` slice to the `MainWeatherAction` constant. This allows you to access the action
creators defined in the slice. */
export const MainWeatherAction = MainWeatherSlice.actions;