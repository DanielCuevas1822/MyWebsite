import React from "react";
import "../assets/styles/containers/Contact.scss";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__container row">
          <div className="col-12">
            <h3>¿Te gusta mi trabajo?</h3>
            <h5>Utiliza los siguientes medios de contacto para charlar.</h5>
          </div>
          <div className="col-12 col-md-6">
            <Form />
          </div>
          <div className="col-12 col-md-6">
            <p>Telefono: 7751468353</p>
            <p>Correo Electrónico: daniel.cuevas1822@gmail.com</p>
            <p>Linkedin: Juan Daniel Cuevas Hernández</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
