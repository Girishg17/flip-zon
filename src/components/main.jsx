import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/erik-mclean-nfoRa6NHTbU-unsplash.jpg"
            alt="Card"
            style={{ height: "70vh" }}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
               Hot Sale is On! Get 50% off on all products.<br/> Hurry up! Limited time offer.<br/>
               New Season Arrivals are here. Shop Now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
