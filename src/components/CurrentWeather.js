import map from "./weathercode.map"

function CurrentWeather({data}) {
    const temperature = Math.round(data.current_weather.temperature) + "°C"
    const weathercode = map.get(data.current_weather.weathercode)

    return (
        <>
        <h1>{temperature}</h1>
        <img src="https://i.pinimg.com/originals/9e/76/44/9e76440e228671d77b9afc06887fab3c.png" />
        <h2>{weathercode}</h2>
        </>
    )
}

export default CurrentWeather