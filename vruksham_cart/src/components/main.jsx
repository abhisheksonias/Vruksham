import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-white text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            {/* <div className="container">
              <button className="btn btn-yellow rounded-pill px-8 py-2 mt-3">Shop Now</button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
