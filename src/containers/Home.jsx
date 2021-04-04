import React from "react";
import "../assets/styles/containers/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="home__container col-12 d-flex align-items-center">
            <div>
              <h1>Hola, soy Daniel Cuevas</h1>
              <h3>Ingeniero en Sistemas Computacionales</h3>
              <p>
                Cuento con experiencia en la creación de sitios web y
                aplicaciones de calidad. Con más de dos años trabajando en el
                sector digital soy un apasionado en el desarrollo web y me gusta
                construir productos que garantizan la excelente experiencia de
                los usuarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
