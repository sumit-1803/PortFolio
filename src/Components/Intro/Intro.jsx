import "./Intro.css"
import me from "../../img/Me.png";
const Intro = ()=> {
    return (
      <>
        <div className="i">
          <div className="i-left">
            <div className="i-left-wrapper">
              <h2 className="i-intro">Hello, My name is </h2>
              <h1 className="i-name">Sumit Kumar</h1>
              <div className="i-title">
                <div className="i-title-wrapper">
                  <div className="i-title-item">Web Developer</div>
                  <div className="i-title-item">UI-UX Designer</div>
                  <div className="i-title-item">Photographer</div>
                  <div className="i-title-item">Content-Creator</div>
                  <div className="i-title-item">Writer</div>
                </div>

              </div>
                <p className="i-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis fuga, aut cumque nostrum reprehenderit eum voluptatum voluptas architecto ratione illum corporis facilis doloremque repellendus ducimus nobis enim ex dicta.
                </p>
            </div>

          </div>





          <div className="i-right">
            <div className="i-bg">

            </div>
            <img src={me} alt="" className="i-image" />
          </div>
        </div>
      </>
    );
    
}

export default Intro;