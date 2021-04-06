import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Proyect.scss";
import { connect } from "react-redux";
import { action_like_action } from "../redux/actions/proyectsActions";

const Proyect = (props) => {
  const { id, title, short_description, like, likes } = props.info;

  const handleLike = (id_proyect) => {
    props.action_like_action(id_proyect);
  };

  return (
    <div className="col-12 col-md-4">
      <div className="card">
        <Link to={`/proyects/${id}`}>
          <img
            className="card-img-top card-image"
            src="https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png"
            alt="proyect"
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-description">
            <p className="card-text">{short_description}</p>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn" onClick={() => handleLike(id)}>
              <i
                className={`fas fa-thumbs-up ${like ? "like" : "dislike"}`}
              ></i>
              <p className="like">{likes}</p>
            </button>
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
