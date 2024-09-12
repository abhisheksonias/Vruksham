import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, Footer, Mapbox } from "../components";

const Map = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-7">
       <Mapbox />
      </div>
      <Footer />
    </>
  );
};

export default Map;
