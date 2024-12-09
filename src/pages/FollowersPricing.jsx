import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./FollowersPricing.css"; // Import CSS for styling

const FollowersPricing = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const pricingOptions = [
    {
      followers: "1k",
      price: "₹149",
      oldPrice: "₹359",
      details: {
        age: "1-3 years old",
        time: "UltraFast",
        dropRate: "0% No Drop",
      },
    },
    {
      followers: "5k",
      price: "₹350",
      oldPrice: "₹859",
      details: {
        age: "1-3 years old",
        time: "UltraFast",
        dropRate: "0% No Drop",
      },
    },
    {
      followers: "10k",
      price: "₹599",
      oldPrice: "₹1499",
      details: {
        age: "1-3 years old",
        time: "UltraFast",
        dropRate: "0% No Drop",
      },
    },
  ];

  const handleBuyNow = (option) => {
    navigate("/purchase", { state: option }); // Navigate to /purchase and pass selected option
  };

  return (
    <div className="pricing-section">
      {pricingOptions.map((option, index) => (
        <div className="pricing-card" key={index}>
          <h3>
            Followers: <span>{option.followers}</span> 🔥
          </h3>
          <p className="price">
            Price: <span>{option.price}</span>{" "}
            <del className="old-price">{option.oldPrice}</del>
          </p>
          <ul className="details">
            <li>Old & Real: {option.details.age}</li>
            <li>Time: {option.details.time}</li>
            <li>Drop Rate: {option.details.dropRate}</li>
          </ul>
          <button
            className="buy-btn"
            onClick={() => handleBuyNow(option)} // Pass selected option on button click
          >
            Get Followers Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default FollowersPricing;
