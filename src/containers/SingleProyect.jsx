import React from "react";
import "../assets/styles/containers/SingleProyect.scss";
import { connect } from "react-redux";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Navigation, Pagination, A11y]);

const SingleProyect = (props) => {
  const { id } = props.match.params;  
  return (
    <div className="singleproyect">
      <div className="container">
        <img className="mask" src="https://raw.githubusercontent.com/DanielCuevas1822/MyWebsite/main/src/assets/images/Mascara4.png" alt="mask" />
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

                  <div id="slider" className="slider">
                    <Swiper
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}                      
                    >
                      {item.images.map((item) => {
                        return (
                          <SwiperSlide>
                            <img
                              className="slide-img"
                              src={item}
                              alt="proyect"
                            />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>

                  <p className="subtitle">Herramientas utilizadas:</p>
                  <ul>
                    {item.tools.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <p className="subtitle">
                    URL: <a href={item.link}>{item.link}</a>
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
