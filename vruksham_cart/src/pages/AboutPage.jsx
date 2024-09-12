import React from "react";
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          The VRUKSHAM Cart is your one-stop shop for all Ayurvedic products.
          Rooted in the ancient wisdom of Ayurveda, VRUKSHAM offers a carefully
          curated selection of herbal supplements, natural remedies, organic
          skincare, wellness products, and much more. We ensure that every
          product we offer is sourced from authentic, trusted Ayurvedic
          suppliers, maintaining the highest standards of purity and
          effectiveness. With the power of nature at your fingertips, you can
          browse and shop a variety of Ayurvedic products to support your
          health, vitality, and well-being. Whether you're looking for herbal
          teas, medicinal oils, or organic beauty essentials, VRUKSHAM connects
          you with quality products that are aligned with your holistic health
          goals. To enhance the shopping experience, our platform also offers
          features like personalized recommendations, easy checkout, and expert
          advice from Ayurvedic practitioners. Embrace the balance and harmony
          of Ayurveda with VRUKSHAM where natural wellness meets convenience.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="./assets/product3.png"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Herbal Supplements</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="./assets/product4.png"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Skincare and Beauty</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="./assets/product2.png"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Digestive and Detoxification</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="./assets/product1.png"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Pain Relief and Joint Care</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
