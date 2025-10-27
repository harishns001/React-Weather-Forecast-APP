const baseURL = "https://api.weatherapi.com/v1/current.json?key=f023d27f28fb46a8aaa120827250709"

export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
}