function DayHourly({ data }) {
    let date = new Date;
    let hour = date.getHours()
    let timeArray = []
    let countHourStart = hour + 1
    let tempArray = data.hourly.temperature_2m.splice([countHourStart], 12).map(num => Math.round(num))

    for (let i = 0; i < 12; i++) {
        hour++
        if (hour < 12) {
            timeArray.push(hour + ' am')
        }
        if (hour > 12 && hour < 24) {
            timeArray.push((hour - 12) + ' pm')
        }
        if (hour > 24) {
            timeArray.push((hour - 24) + ' am')
        }
        if (hour === 24) {
            timeArray.push((hour - 12) + ' am')
        }

    }

    return (
        <table> 
            <tr>
                {timeArray.map((time) => {
                    return (
                        <td>
                            <td>{time}</td>
                            <img src="https://i.pinimg.com/originals/9e/76/44/9e76440e228671d77b9afc06887fab3c.png" />
                        </td>
                    )
                })
                }

            </tr>
            <tr>
                {tempArray.map((temp) => {
                    return (
                        <td>
                            <td>{temp}°C</td>
                        </td>
                    )
                })
                }
            </tr>
        </table>
    )
}

export default DayHourly