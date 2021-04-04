import React from "react";
import "../assets/styles/containers/MyProyects.scss";
import Proyect from "../components/Proyect";

const MyProyects = () => {
  return (
    <div className="myproyects">
      <div className="container">
        <div className="row">
          <div className="section col-12">
            <div className="myproyects__title">
              <h2>Mis Proyectos</h2>
              <p>Estos son algunos de los trabajos realizados durante mi carrera profesional.</p>
            </div>
            <div className="myproyects__list">
              <Proyect />

              <Proyect />

              <Proyect />

              <Proyect />

              <Proyect />

              <Proyect />

              <Proyect />

              <Proyect />

              <Proyect />

              <Proyect />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProyects;
