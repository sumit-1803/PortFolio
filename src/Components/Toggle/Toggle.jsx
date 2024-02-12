import { useContext } from "react";
import "./Toggle.css";
import { ThemeContext } from "../../context";
import sun from "../../img/sun.png";
import moon from "../../img/moon.png";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="t">
      {theme.state.darkMode ? (
        <>
          <img src={moon} alt="Moon not working" className="t-icon" />
          <div className="t-slider"></div>
        </>
      ) : (
        <>
          <div className="t-slider"></div>
          <img src={sun} alt="Sun not working" className="t-icon" />
        </>
      )}
      <button
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : "calc(100% - 25px)" }}
      ></button>
    </div>
  );
};

export default Toggle;
