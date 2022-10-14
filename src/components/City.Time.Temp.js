function CityTimeTemp({data}) {
const city = data.timezone.split('/').pop()

const date = new Date
const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    hour12: true
})

    return (
        <>
        <h2>{city}, {time}</h2>
        </>
    )
}

export default CityTimeTemp