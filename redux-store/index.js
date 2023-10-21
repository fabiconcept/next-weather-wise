import { configureStore } from '@reduxjs/toolkit';
import { MainWeatherSlice } from './slices/LandingPageSlice';

const store = configureStore({
    reducer: {
        mainWeatherAction: MainWeatherSlice.reducer,
    }
})

/* `export default store;` is exporting the `store` object as the default export of this module. This
means that when another module imports this module, they can access the `store` object directly
without having to specify its name. */
export default store;