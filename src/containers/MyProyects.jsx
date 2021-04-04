import React, { Component } from "react";
import "../assets/styles/containers/MyProyects.scss";
import Proyect from "../components/Proyect";

const MyProyects = () => {
  return (
    <div className="myproyects">
      <div className="container">
        <div className="row">
          <div className="myproyects__container col-12 d-flex align-items-center">
            <div className="myproyects__container__list">
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
