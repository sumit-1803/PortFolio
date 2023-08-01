import { useContext } from "react";
import "./Toggle.css"
import { ThemeContext } from "../../context";
const Toggle = () =>{
const theme = useContext(ThemeContext);
const handleClick = () =>{
    theme.dispatch({type:"TOGGLE"});
}

return (
  <div className="t">
    <img src="src\img\sun.png" alt="" className="t-icon" />
    <img src="src\img\moon.png" alt="" className="t-icon" />
    <button className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0  : 25}} ></button>
  </div>
);
}
export default Toggle;