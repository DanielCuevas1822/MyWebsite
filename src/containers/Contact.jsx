import React from "react";
import "../assets/styles/containers/Contact.scss";
import Form from "../components/Form";
import Mascara3 from "../assets/images/Mascara3.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
      <img className="mask" src={Mascara3} alt="mask" />
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
                  <p className="paragraph pcontact">
                    <i className="fas fa-phone-square-alt"></i> 7751468353
                  </p>
                  <p className="paragraph pcontact">
                    <i className="fas fa-envelope-square"></i>{" "}
                    daniel.cuevas1822@gmail.com
                  </p>
                  <p className="paragraph pcontact">
                    <i className="fab fa-linkedin"></i> Juan Daniel Cuevas
                    Hernández
                  </p>
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
