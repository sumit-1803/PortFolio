import "./About.css";
import img from "../../img/bandw.jpg";
import img2 from "../../img/award.jpg";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card-bg">.....</div>
        <div className="a-card">
          <img src={img} alt="" className="a-img" />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          accusantium non perferendis nam, error ut?
        </p>
        <p className="a-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta veniam
          porro dolorem eos culpa tenetur dignissimos nemo officia amet?
          Asperiores harum quia dolorum ea expedita? Magnam nostrum asperiores
          explicabo amet?
        </p>
        <div className="a-award">
          <img src={img2} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              ab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
