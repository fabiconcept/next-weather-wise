"use client"

const { useState, useEffect } = require("react");

export const useIconSelector = () => {
    const [icon, useIconSelector] = useState("");
    const [weatherCondition, setWeatherCondition ] = useState("");
    const [timeOfDay, setTimeOfDay ] = useState("");

    useEffect(() => {
        switch (String(weatherCondition).toLowerCase()) {
            case "clear":
                // clear weather
                if (timeOfDay) {
                    useIconSelector("https://weatherwise.sirv.com/Images/all/clear-day.svg");
                } else {
                    useIconSelector("https://weatherwise.sirv.com/Images/all/clear-night.svg");
                }
                break;
    
            case "partly cloudy":
                // partly cloudy weather
                if (timeOfDay) {
                    useIconSelector("https://weatherwise.sirv.com/Images/all/partly-cloudy-day.svg");
                } else {
                    useIconSelector("https://weatherwise.sirv.com/Images/all/partly-cloudy-night.svg");
                }
                break;
    
            case "cloudy":
                // cloudy weather
                useIconSelector("https://weatherwise.sirv.com/Images/all/cloudy.svg");
                break;
    
            case "mist":
                // misty weather
                useIconSelector("https://weatherwise.sirv.com/Images/all/mist.svg");
                break;
    
            case "fog":
                // foggy weather
                useIconSelector("https://weatherwise.sirv.com/Images/all/fog.svg");
                break;
    
            case "haze":
                // hazy weather
                if (timeOfDay) {
                    useIconSelector("https://weatherwise.sirv.com/Images/all/haze-day.svg");
                } else {
                    useIconSelector("https://weatherwise.sirv.com/Images/all/haze-night.svg");
                }
                break;
    
            case "light rain":
                // light rain
                useIconSelector("https://weatherwise.sirv.com/Images/all/raindrop.svg");
                break;
                
            case "moderate rain":
                // moderate rain
                useIconSelector("https://weatherwise.sirv.com/Images/all/raindrops.svg");
                break;
                
            case "heavy rain":
                useIconSelector("https://weatherwise.sirv.com/Images/all/rain.svg");
                // heavy rain
                if (timeOfDay) {
                    useIconSelector("");
                } else {
                    useIconSelector("");
                }
                break;
    
            case "light snow":
                // light snow
                useIconSelector("https://weatherwise.sirv.com/Images/all/snowflake.svg");
                break;
    
            case "moderate snow":
                // moderate snow
                useIconSelector("https://weatherwise.sirv.com/Images/all/snow.svg");
                break;
    
            case "heavy snow":
                // heavy snow
                useIconSelector("https://weatherwise.sirv.com/Images/all/sleet.svg");
                break;
    
            case "showers":
                // showers
                useIconSelector("https://weatherwise.sirv.com/Images/all/rain.svg");
                break;
    
            case "thunderstorms":
                // thunderstorms
                if (timeOfDay) {
                    useIconSelector("https://weatherwise.sirv.com/Images/all/thunderstorms-day.svg");
                } else {
                    useIconSelector("https://weatherwise.sirv.com/Images/all/thunderstorms-night.svg");
                }
                break;
    
            case "drizzle":
                // drizzle
                useIconSelector("https://weatherwise.sirv.com/Images/all/drizzle.svg");
                break;
    
            case "freezing rain":
                // freezing rain
                useIconSelector("https://weatherwise.sirv.com/Images/all/rain.svg");
                break;
    
            case "freezing drizzle":
                // freezing drizzle
                useIconSelector("https://weatherwise.sirv.com/Images/all/drizzle.svg");
                break;
    
            case "sleet":
                // sleet
                useIconSelector("https://weatherwise.sirv.com/Images/all/sleet.svg");
                break;
    
            case "snow showers":
                // snow showers
                useIconSelector("https://weatherwise.sirv.com/Images/all/snow.svg");
                break;
    
            case "rain showers":
                // rain showers
                useIconSelector("https://weatherwise.sirv.com/Images/all/rain.svg");
                break;
    
            case "thunderstorm with rain":
                // thunderstorm with rain
                if (timeOfDay) {
                    useIconSelector("https://weatherwise.sirv.com/Images/all/thunderstorms-day-rain.svg");
                } else {
                    useIconSelector("https://weatherwise.sirv.com/Images/all/thunderstorms-night-rain.svg");
                }
                break;
    
            case "thunderstorm with snow":
                // thunderstorm with snow
                if (timeOfDay) {
                    useIconSelector("https://weatherwise.sirv.com/Images/all/thunderstorms-day-snow.svg");
                } else {
                    useIconSelector("https://weatherwise.sirv.com/Images/all/thunderstorms-night-snow.svg");
                }
                break;
    
            default:
                // unrecognized weather conditions
                useIconSelector("https://weatherwise.sirv.com/Images/all/not-available.svg");
                break;
        }
    }, [weatherCondition, timeOfDay]);

    return [icon, setWeatherCondition, setTimeOfDay];
}