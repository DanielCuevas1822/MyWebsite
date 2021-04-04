import React from "react";
import "../assets/styles/containers/Contact.scss";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="section col-12 d-flex align-items-center">
            <div className="row">
              <div className="col-12">
                <h3>¿Te gusta mi trabajo?</h3>
                <h5>Puedes utilizar los siguientes medios de contacto para que hablemos.</h5>
              </div>

              <div className="contact__content col-12 col-md-6">
                <Form />
              </div>

              <div className="contact__content col-12 col-md-6 d-flex flex-column justify-content-center">
                <p>Teléfono: 7751468353</p>
                <p>Correo Electrónico: daniel.cuevas1822@gmail.com</p>
                <p>Linkedin: Juan Daniel Cuevas Hernández</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
