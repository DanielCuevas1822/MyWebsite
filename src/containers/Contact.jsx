import React from "react";
import "../assets/styles/containers/Contact.scss";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <img className="mask" src="https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/Mascara3.png" alt="mask" />
        <div className="row">
          <div className="section col-12 d-flex align-items-center">
            <div className="row">
              <div className="col-12">
                <h3 className="title">¿Te gusta mi trabajo?</h3>
                <h5 className="paragraph">
                  Puedes utilizar los siguientes medios de contacto para que
                  hablemos.
                </h5>
              </div>

              <div className="contact__content col-12 col-md-6">
                <Form />
              </div>

              <div className="contact__content col-12 col-md-6 d-flex flex-column align-items-center">
                <div>
                  <div className="paragraph pcontact d-flex">
                    <i className="fas fa-phone-square-alt"></i>
                    <a href="tel:7751468353">7751468353</a>
                  </div>
                  <div className="paragraph pcontact d-flex">
                    <i className="fas fa-envelope-square"></i>{" "}
                    <a href="mailto:daniel.cuevas1822@gmail.com">
                      daniel.cuevas1822@gmail.com
                    </a>
                  </div>
                  <div className="paragraph pcontact d-flex">
                    <i className="fab fa-linkedin"></i>{" "}
                    <a href="https://www.linkedin.com/in/juan-daniel-cuevas-hern%C3%A1ndez-679882152">
                      Juan Daniel Cuevas Hernández
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
