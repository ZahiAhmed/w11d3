import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

import { ThemeContext } from '../../context/ThemeContext';
import { useTheme } from '../../context/ThemeContext';

import ThemeProvider from '../../context/ThemeContext';

function Greenhouse() {
  
  return (
    <section>
      <img  className='greenhouse-img'
            src={dayImage}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;