import { MainWeatherAction } from "../slices/LandingPageSlice";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_CURRENT;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const getForecastTest = (params) => {
    const url = `${baseUrl}?key=${apiKey}&q=${params}&aqi=no`
    return async (dispatch) => {
        dispatch(MainWeatherAction.setLoading(true));
        const req = async () => {
            const response = await fetch(url);
            const responseData = response.json();

            return responseData;
        }

        try {
            const request = await req();
            dispatch(MainWeatherAction.getMainWeather(request));
            dispatch(MainWeatherAction.checkError({status: false, message: "All Good"}));
        } catch (error) {
            dispatch(MainWeatherAction.checkError({status: true, message: `handle this: ${error}`}));
            throw new Error(`Controlled Error: ${error}`);
        } finally {
            dispatch(MainWeatherAction.setLoading(false));
        }
    }
}