import './days.scss';

const Days = ({ dateTime, weather, maxTemp, minTemp, windSpeed, icon, windDir, index }) => {
    return (
        <div className='day__wrapper' key={index}>
            <h2>{new Date(Date.parse(dateTime)).toLocaleString('en-us', { weekday: 'long' })} {dateTime}</h2>
            <div className='day__wrapper__weather'>
                <img src={`https://www.weatherbit.io/static/img/icons/${icon}.png`} alt="" className='day__wrapper__weather__icon' />
                <span>{weather}</span>
            </div>
            <span className='day__wrapper__maxtemp'>Max: {maxTemp}</span>
            <span className='day__wrapper__mintemp'>Min: {minTemp}</span>
            <div className='day__wrapper__windspeed'>
                <img src="" alt="" />
                <span>Wind: {windSpeed} {windDir}</span>
            </div>
        </div>

    )
}

export default Days