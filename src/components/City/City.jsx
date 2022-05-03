import './city.scss';

const City = ({ cityValue, selectCity }) => {
  return (
    <div className="city__wrapper">
      <h1>Weather Widget</h1>
      <select name="" className="city__wrapper__options" value={cityValue} onChange={selectCity}>
        <option value="accra" className="cityName">Accra</option>
        <option value="banjul" className="cityName">Banjul</option>
        <option value="lagos" className="cityName">Lagos</option>
        <option value="casablanca" className="cityName">Casablanca</option>
        <option value="dakar" className="cityName">Dakar</option>
        <option value="abuja" className="cityName">Abuja</option>
        <option value="nairobi" className="cityName">Nairobi</option>
      </select>
      {/* <h1>{cityValue.charAt(0).toUpperCase() + cityValue.slice(1)}</h1> */}
    </div>
  )
}

export default City