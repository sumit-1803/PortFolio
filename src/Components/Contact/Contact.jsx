import { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";
import phone from "../../img/phone.png"
import email from "../../img/email.png"
import location from "../../img/location.png"

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xqtplbe",
        "template_o56rgfv",
        formRef.current,
        "v8wNgPKmZpEGXK_ZB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setdone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const formRef = useRef();
  const [done, setdone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Discuss Your Project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" /> +91 8587 003009
            </div>
            <div className="c-info-item">
              <img src={email} className="c-icon" alt="" />{" "}
              Contact@sumit-1803
            </div>
            <div className="c-info-item">
              <img src={location} alt="" className="c-icon" /> 219 ,
              Munirka Village , New Delhi - 110067
            </div>
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            <b>What's Your Story ?</b> Get in Touch. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Recusandae, similique.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text "
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text "
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text "
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              id=""
              placeholder="Message..."
              name="message"
              rows="5"
            ></textarea>
            <button>Submit</button>
            <div className="thanks">{done && "Thank-You"}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
