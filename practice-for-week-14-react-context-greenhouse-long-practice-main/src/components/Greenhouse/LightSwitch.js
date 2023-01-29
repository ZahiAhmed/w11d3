import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {

  const changeTheme = useTheme();

  return (
    <div className={`light-switch ${changeTheme.themeName}`}>
      <div className="on" onClick={ () => changeTheme.setThemeName('day') } >DAY</div>
      <div className="off" onClick={ () => changeTheme.setThemeName('night') } >NIGHT</div>
    </div>
  );
}

export default LightSwitch;