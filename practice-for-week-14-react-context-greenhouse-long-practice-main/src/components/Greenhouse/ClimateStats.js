import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';
function ClimateStats() {
  const climate = useClimate();
  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {`${climate.temp}`}°F
      </div>
      <div className="humidity">
        Humidity {"y"}%
      </div>
    </div>
  )
}

export default ClimateStats;