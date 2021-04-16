import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Proyect.scss";
import { connect } from "react-redux";
import { action_like_action } from "../redux/actions/proyectsActions";

const Proyect = (props) => {
  const { id, title, short_description, like, likes, logo } = props.info;

  const handleLike = (id_proyect) => {
    props.action_like_action(id_proyect);
  };

  return (
    <div className="col-12 col-md-4">
      <div className="card">
        <img className="card-img-top card-image" src={logo} alt="proyect" />

        <div className="col-12 d-flex justify-content-around moreinfo">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <button className="btn" onClick={() => handleLike(id)}>
              <i
                className={`fas fa-thumbs-up ${like ? "like" : "dislike"}`}
              ></i>
              <p className="like">{likes}</p>
            </button>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center">
            <i className="fas fa-info"></i>
            <Link to={`/proyects/${id}`}>
              <p>Más información</p>
            </Link>
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-description">
            <p className="card-text">{short_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  action_like_action,
};

export default connect(null, mapDispatchToProps)(Proyect);
