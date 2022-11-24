import React from "react";
import { provides } from "../../data";
import wave from "../../images/wave.png";
const Provide = () => {
  return (
    <div className="we-provide text-center">
      <div className="container">
        <div className="provide-title">
          <h3>what we provide</h3>
          <div className="provide-wave">
            <img src={wave} alt="provide-title" />
          </div>
        </div>
        <div className="provide-content">
          <div className="row">
            {provides.map((provide) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4" key={provide.id}>
                  <div className="provide-item">
                    <div className="provide-img">
                      <img src={provide.img} alt={provide.title} />
                    </div>
                    <div className="provide-details">
                      <h5>{provide.title}</h5>
                      <p>{provide.dec}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
