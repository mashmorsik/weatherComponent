import { useState, useEffect } from 'react'
import DateComponent from './DateComponent';
import CityTimeTemp from './City.Time.Temp';
import CurrentWeather from './CurrentWeather';
import DayHourly from './DayHourly';
import WeeklyForecast from './WeeklyForecast';

function Wrapper() {
    const [data, setData] = useState('');

    let latitude
    let longitude

    navigator.geolocation.getCurrentPosition((position) => {
        latitude = position.coords.latitude.toFixed(4);
        longitude = position.coords.longitude.toFixed(4);
    })

    useEffect(() => {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,apparent_temperature,precipitation&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&current_weather=true&timezone=auto`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [latitude, longitude])

    console.log(data)

    return ( 
        <div>
            <DateComponent />
            {data && <CityTimeTemp data={data} />}
            {data && <CurrentWeather data={data} />}
            {data && <DayHourly data={data} />}
            {data && <WeeklyForecast data={data} index={1} />}
            {data && <WeeklyForecast data={data} index={2} />}
            {data && <WeeklyForecast data={data} index={3} />}
            {data && <WeeklyForecast data={data} index={4} />}
            {data && <WeeklyForecast data={data} index={5} />}
            {data && <WeeklyForecast data={data} index={6} />}
        </div>
    )
}

export default Wrapper