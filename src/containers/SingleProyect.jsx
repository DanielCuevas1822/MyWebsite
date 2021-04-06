import React from "react";
import "../assets/styles/containers/SingleProyect.scss";
import { connect } from "react-redux";

const SingleProyect = (props) => {
  const { id } = props.match.params;
  return (
    <div className="singleproyect">
      <div className="container">
        <div className="row">
          {props.proyects.map((item) => {
            if (item.id === parseInt(id)) {
              return (
                <div
                  key={item.id}
                  className="section col-12 d-flex flex-column justify-content-center"
                >
                  <img
                    src="https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png"
                    alt="proyect"
                  />

                  <h2>{item.title}</h2>

                  <p>{item.description}</p>

                  <p>Herramientas utilizadas:</p>
                  <ul>
                    {item.tools.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <p>
                    URL: <a href={item.link}>{item.title}</a>
                  </p>
                  <p>
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
