import React from "react";
// import { useLocation } from "react-router-dom"; // Import useLocation to get passed state
import './PurchasePage.css'
const PurchasePage = () => {
  // const location = useLocation();
  // const selectedOption = location.state || {};

  return (
    <div className="container">
    <h1>Complete Your Payment</h1>
    <div className="instructions">
      <p><strong>Step 1:</strong> Scan the QR code below and pay the package amount.</p>
      <p><strong>स्टेप 1:</strong> नीचे दिए गए QR कोड को स्कैन करें और पैकेज राशि का भुगतान करें।</p>
    </div>
    <div className="qr-section">
      <img 
        src="./image/payment.jpg" 
        alt="QR Code" 
        className="qr-code" 
      />
    </div>
    <div className="instructions">
      <p><strong>Step 2:</strong> After completing the payment, we check the payment and instantly increase the followers.</p>
      <p><strong>स्टेप 2:</strong> भुगतान पूरा करने के बाद, हम भुगतान की जांच करते हैं और तुरंत फॉलोअर्स बढ़ाते हैं।</p>
    </div>
  </div>
  );
};

export default PurchasePage;
