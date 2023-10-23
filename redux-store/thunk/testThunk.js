import { MainWeatherAction } from "../slices/LandingPageSlice";

const params = `&q=gaza,palestine&aqi=no`;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_CURRENT;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const url = `${baseUrl}?key=${apiKey}${params}`

export const getForecastTest = () => {
    return async(dispatch) => {
        const req = async()=> {
            const response = await fetch(url);
            const responseData = response.json();

            return responseData;
        }

        try {
            const request = await req();
            dispatch(MainWeatherAction.getMainWeather(request));
        } catch (error) {
            throw new Error(`Controlled Error: ${error}`);
        }
    }
}