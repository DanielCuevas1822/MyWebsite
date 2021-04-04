import React from "react";
import "../assets/styles/containers/SingleProyect.scss";

const SingleProyect = (props) => {
  return (
    <div className="singleproyect">
    <div className="container">
      <div className="row">
        <div className="section col-12 d-flex flex-column justify-content-center">
          <img src="" alt="proyect" />

          <h2>{props.match.params.name}</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            mollitia praesentium in, libero animi consequuntur odit vitae ipsum
            provident ratione harum beatae eum consectetur atque laborum
            reprehenderit maxime quidem sint.
          </p>

          <p>Herramientas utilizadas:</p>
          <ul>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>SASS</li>
            <li>React Js</li>
            <li>Redux</li>
          </ul>

          <p>URL: </p>
          <p>Proyecto realizado para la empresa tal en el año 2019.</p>
        </div>
      </div>
    </div></div>
  );
};

export default SingleProyect;
