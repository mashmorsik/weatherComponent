import map from './weathercode.map.js'

function WeeklyForecast({ data, index }) {

        let tomorrow = new Date(data.daily.time[index].toString())
        let date = tomorrow.getDate()
        let month = tomorrow.toLocaleDateString('default', { month: 'long' })
        let dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(tomorrow)

        let maxTemp = data.daily.temperature_2m_max[index]
        let minTemp = data.daily.temperature_2m_min[index]
        let weathercode = map.get(data.daily.weathercode[index])

        let dateDisplay = date + ' ' + month + ', ' + dayOfWeek
        
    return (
        <>
            <h3>{dateDisplay}</h3>
            <img src="https://i.pinimg.com/originals/9e/76/44/9e76440e228671d77b9afc06887fab3c.png"/>
            <h3>{weathercode}</h3>
            <h3>{maxTemp}°C/{minTemp}°C</h3>
        </>

    )
}

export default WeeklyForecast