"use client";
import { createSlice } from '@reduxjs/toolkit';

export const MainWeatherSlice = createSlice({
    name: "MainWeather",
    initialState: {
        isLoading: false,
        data: null,
    },
    reducers: {
        getMainWeather (state, action) {
            const payload = action.payload
            
        }
    }
})

/* `const MainWeatherAction = MainWeatherSlice.actions;` is assigning the `actions` object from the
`MainWeatherSlice` slice to the `MainWeatherAction` constant. This allows you to access the action
creators defined in the slice. */
export const MainWeatherAction = MainWeatherSlice.actions;