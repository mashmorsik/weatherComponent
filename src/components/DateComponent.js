function DateComponent() {
    let date = new Date
    let day = date.getDate()
    let month = date.toLocaleDateString('default', { month: 'long' })
    let dayWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(date)
    let dateDisplay = day + ' ' + month + ', ' + dayWeek

    return (
        <h2>{dateDisplay}</h2>
    )
}

export default DateComponent