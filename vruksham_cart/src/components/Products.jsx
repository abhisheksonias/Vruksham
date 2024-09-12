import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";

const Product = () => {
  // Static product data for three categories
  const products = [
    {
      id: 1,
      title: "Hair Growth Vitalizer, reverser your Hair Loss (60 Caps) ",
      category: "Hair",
      image: "./assets/Hair1.jpg",
      price: 19,
      description:
        "Zandu Hair Growth Vitalizer is a solution that takes care of hair health while supporting your mental and physical health. These capsules are free of toxins, chemicals, gelatin, parabens, or sulphates.",
      rating: { rate: 4.5, count: 120 },
    },
    {
      id: 2,
      title: "OZiva Hair Vitamins for Hair Re-Growth - 60 Capsules",
      category: "Hair",
      image: "./assets/Hair2.png",
      price: 29.99,
      description:
        "Clinically Proven SesZenBioTM provides Biotin from Sesbania Agati Plant, 3.5% Iron from Curry Leaf extracts and 4% Zinc from Guava Leaf Extracts to strengthen hair follicles and nourish hair roots",
      rating: { rate: 4.8, count: 95 },
    },
    {
      id: 3,
      title: "Adivasi Neelgiri Herbal Hair Growth Oil for (Pack of 1)",
      category: "Hair",
      image: "./assets/Hair3.png",
      price: 14.99,
      description:
        "Adivasi Neelgiri Herbal Hair Growth Oil is an excellent alternative to all your hair care products. The best part is you can now make your hair growth oil using a mix of natural herbs and no artificial ingredients.",
      rating: { rate: 4.2, count: 78 },
    },
    {
      id: 4,
      title: "Hair Vitamin with DHT Blockers | Biotin and Bhringraj",
      category: "Hair",
      image: "./assets/Hair4.png",
      price: 24.99,
      description:
        "Hair vitamins for growth that target root causes of hair loss such as vitamin deficiency, poor nutrition, and DHT. Made with natural and ayurvedic ingredients to promote thicker, healthier hair.",
      rating: { rate: 4.7, count: 150 },
    },
    {
      id: 5,
      title: "Psoria Oil: Oil for Scalp and Full Body Psoriasis",
      category: "Skin",
      image: "./assets/Skin1.png",
      price: 24.99,
      description:
        "Psoria Oil has the right blend of herbal ingredients, which gives the best results. It has proven anti-psoriatic activity under its immune modulatory mechanism.",
      rating: { rate: 4.7, count: 150 },
    },
    {
      id: 6,
      title: "Healthy Skin Tablets for Glowing Healthy Skin (60 Tab)",
      category: "Skin",
      image: "./assets/Skin2.jpg",
      price: 24.99,
      description:
        "HEALTHY SKIN TABLET is a mixture of the best ayurvedic herbs from Ayurgenomics Botanicals that help relieve dry skin, reduce itching and most importantly keep your body and skin glowing.",
      rating: { rate: 4.7, count: 150 },
    },
    {
      id: 7,
      title: "KRISHNA'S HERBAL & AYURVEDA Skin & Pimple Care Juice - 1000 Ml",
      category: "Skin",
      image: "./assets/Skin3.png",
      price: 24.99,
      description:
        "Pimple Care Juice contains antioxidant & has anti-microbial properties, and also combats excess oil production. Pimple Care helps controls acne, pimples & excess oil production",
      rating: { rate: 4.7, count: 150 },
    },
    {
      id: 8,
      title: "TAC Kumkumadi Gold Glow Face Oil/Tailam for Glowing Skin",
      category: "Skin",
      image: "./assets/Skin4.png",
      price: 24.99,
      description:
        "100% Pure & Ayurvedic. Repairs Skin Barrier. Rich in antioxidants and anti-aging properties, it helps to reduce the appearance of fine lines, wrinkles, and age spots.",
      rating: { rate: 4.7, count: 150 },
    },
    {
      id: 9,
      title:
        "Prabhat Ayurvedic Daad Cream 10gm | Natural cream for Fungal infections ",
      category: "Fungal Infection",
      image: "./assets/fungal1.png",
      price: 24.99,
      description:
        "Relief from fungal skin infection like Ringworms, Jock itch, Nail fungus, Itching, Skin rashes. Effectively treats minor skin infections such as scabies, ringworm, ulcerated wounds, and other skin diseases. ",
      rating: { rate: 4.7, count: 150 },
    },
    {
      id: 10,
      title:
        "Vedikroots Neem Capsules Ayurvedic helping to Blood Purifier | 60 cap",
      category: "Fungal Infection",
      image: "./assets/fungal2.png",
      price: 24.99,
      description:
        "Vedikroots Neem Capsules are 100% pure and natural neem capsules made from premium quality neem leaves that are carefully sourced and processed to retain maximum potency. ",
      rating: { rate: 4.7, count: 150 },
    },
    {
      id: 11,
      title:
        "Fixderma Nigrifix cream for Acanthosis Nigricans |Exfoliant- 100g",
      category: "Fungal Infection",
      image: "./assets/fungal3.png",
      price: 24.99,
      description:
        "It treats Acanthosis Nigricans, a skin condition characterized by areas of dark, velvety discoloration in body folds and creases. It affects the body parts like ankles,varmpits, thighs",
      rating: { rate: 4.7, count: 150 },
    },
    {
      id: 12,
      title: "Panchkruti Dark Spot Removal Face Wash 200ML",
      category: "Fungal Infection",
      image: "./assets/fungal4.png",
      price: 24.99,
      description:
        "Dark Spot Removal Facewash gives you a clear, blemish-free skin The AHA derived from natural sources exfoliates the skin, eliminates built-up impurities and reveals a new layer ",
      rating: { rate: 4.7, count: 150 },
    },
    {
      id: 13,
      title: "Life Aveda Aller Gi Capsules Controls Allergic Reaction",
      category: "Allergy",
      image: "./assets/allergy1.png",
      price: 24.99,
      description:
        "Aller Gi Capsules are formulated with a blend of Neem and Ashwagandha, known for their natural properties in traditional wellness practices.",
      rating: { rate: 4.7, count: 150 },
    },
    {
      id: 14,
      title: "Freshaler Herbal Inhaler | 100% Natural, Ayurvedic ",
      category: "Allergy",
      image: "./assets/allergy2.png",
      price: 24.99,
      description:
        "Freshaler Herbal Inhaler: 100% Natural, Organic and Pure Herbs. Headache? Sinus? Migraine? Helps within minutes with nasal congestion and sinus pain ",
      rating: { rate: 4.7, count: 150 },
    },
    {
      id: 15,
      title: "Dr. Bakshi's BAKSON'S HOMOEOPATHY Aller A -75 Tablets ",
      category: "Allergy",
      image: "./assets/allergy3.png",
      price: 24.99,
      description:
        "Aller Aid tablets offer an effective solution to alleviate allergy and sinus symptoms.Designed to combat runny nose, sneezing, watery eyes, and body aches. ",
      rating: { rate: 4.7, count: 150 },
    },
    {
      id: 16,
      title: "Ashpveda Ayurvedic Twachamitram Tablet | 30 Tablet ",
      category: "Allergy",
      image: "./assets/Allergy4.png",
      price: 24.99,
      description:
        "Ashpveda Twachamitram tablets for skin issues is a mix of popular ayurvedic plant based ingredients like Choti Pippal Ext.Shudh Gandhak ,Amla Ext. ,Haldi Ext.",
      rating: { rate: 4.7, count: 150 },
    },
  ];

  const [filter, setFilter] = useState(products); // Filtered products
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const filterProducts = (category) => {
    if (category === "ALL") {
      setFilter(products);
    } else {
      const updatedList = products.filter(
        (product) => product.category === category
      );
      setFilter(updatedList);
    }
  };

  return (
    <>
      <div className="container my-10 py-2">
        {/* Category Filter Buttons */}
        <div className="buttons text-center py-1">
          <button
            className="btn mx-1"
            style={{
              backgroundColor: "#FCB503",
              color: "#00305D",
              border: "2px solid darkgreen",
            }}
            onClick={() => filterProducts("ALL")}
          >
            ALL
          </button>
          <button
            className="btn mx-1 py-1"
            style={{
              backgroundColor: "#FCB503",
              color: "#00305D",
              border: "2px solid darkgreen",
            }}
            onClick={() => filterProducts("Hair")}
          >
            Hair
          </button>
          <button
            className="btn mx-1 py-1"
            style={{
              backgroundColor: "#FCB503",
              color: "#00305D",
              border: "2px solid darkgreen",
            }}
            onClick={() => filterProducts("Skin")}
          >
            Skin
          </button>
          <button
            className="btn mx-1 py-1"
            style={{
              backgroundColor: "#FCB503",
              color: "#00305D",
              border: "2px solid darkgreen",
            }}
            onClick={() => filterProducts("Fungal Infection")}
          >
            Fungal Infection
          </button>
          <button
            className="btn mx-2 py-1"
            style={{
              backgroundColor: "#FCB503",
              color: "#00305D",
              border: "2px solid darkgreen",
            }}
            onClick={() => filterProducts("Allergy")}
          >
            Allergy
          </button>
        </div>

        <div className="row">
          {filter.map((product) => (
            <div key={product.id} className="col-md-6 col-lg-4 col-sm-12 py-3">
              <div className="card text-center h-100" style={{ color:"#00305D",backgroundColor: "#E0FFB8", borderRadius: "10px" , padding: "20px" }}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt={product.title}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="lead">
                    {product.rating.rate} <i className="fa fa-star"></i>
                  </p>
                  <h3 className="my-4">${product.price}</h3>
                  <p>{product.description}</p>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => addProduct(product)}
                  >
                    Add to Cart
                  </button>
                  <Link to="/cart" className="btn btn-dark mx-3">
                    Go to Cart
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
