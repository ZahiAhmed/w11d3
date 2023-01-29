import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

import { useTheme } from '../../context/ThemeContext';

function Greenhouse() {
  const context = useTheme(); 
  console.log(context);
  let img; 
  if (context.themeName === 'day') {
    img = dayImage;
  } else {
    img = nightImage;
  }
  console.log(img);
  return (
    <section>
      <img  className='greenhouse-img'
            src={img}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;