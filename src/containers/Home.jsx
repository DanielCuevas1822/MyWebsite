import React from "react";
import "../assets/styles/containers/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <img className="mask" src="https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/Mascara1.png" alt="mask" />
        <div className="row">
          <div className="section col-12 d-flex justify-content-center align-items-center">
            <div>
              <h1 className="title">Hola, soy Daniel Cuevas</h1>
              <h3 className="subtitle">
                Ingeniero en Sistemas Computacionales
              </h3>
              <p className="paragraph">
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
