import { useContext } from "react";
import "./Toggle.css"
import { ThemeContext } from "../../context";
import sun from "../../img/sun.png"
import moon from "../../img/moon.png"
const Toggle = () =>{
const theme = useContext(ThemeContext);
const handleClick = () =>{
    theme.dispatch({type:"TOGGLE"});
}

return (
  <div className="t">
    <img src={sun}alt="" className="t-icon" />
    <img src={moon} alt="" className="t-icon" />
    <button className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0  : 25}} ></button>
  </div>
);
}
export default Toggle;