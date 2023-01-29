import { CoffeeContext } from "../context/CoffeeContext";
import { useContext } from "react";

const SelectedCoffeeBean = () => {
  const context = useContext(CoffeeContext);

  return (
    <div className="selected-coffee">
      <h2>
        {`${context}`}
      </h2>

    </div>
  )
}

export default SelectedCoffeeBean;