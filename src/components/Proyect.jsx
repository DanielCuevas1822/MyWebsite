import React from "react";
import "../assets/styles/components/Proyect.scss";

const Proyect = () => {
  return (
    <div className="col-12 col-md-4">
      <div className="card">
        <img
          className="card-img-top"
          src="https://gaminguardian.com/wp-content/uploads/2018/04/Megumin.png"
          alt="proyect"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Proyect;
