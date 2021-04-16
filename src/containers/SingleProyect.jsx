import React from "react";
import "../assets/styles/containers/SingleProyect.scss";
import { connect } from "react-redux";
import Mascara4 from "../assets/images/Mascara4.png";

const SingleProyect = (props) => {
  const { id } = props.match.params;
  return (
    <div className="singleproyect">
      <div className="container">
      <img className="mask" src={Mascara4} alt="mask" />
        <div className="row">
          {props.proyects.map((item) => {
            if (item.id === parseInt(id)) {
              return (
                <div
                  key={item.id}
                  className="section col-12 d-flex flex-column justify-content-center"
                >
                  <h2 className="title">{item.title}</h2>

                  <p className="description">{item.description}</p>

                  <div className="slider">
                    <img
                      src="https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png"
                      alt="proyect"
                    />
                  </div>

                  <p className="subtitle">Herramientas utilizadas:</p>
                  <ul>
                    {item.tools.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <p className="subtitle">
                    URL: <a href={item.link}>{item.title}</a>
                  </p>
                  <p className="work">
                    Proyecto realizado para {item.company} en el año {item.year}
                    .
                  </p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    proyects: state.proyects,
  };
};

export default connect(mapStatetoProps)(SingleProyect);
