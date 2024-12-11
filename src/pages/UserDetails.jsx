import React from "react";
import { useLocation } from "react-router-dom";
import FollowersPricing from "./FollowersPricing";
import FixedNavbar from "./FixedNavbar";

const UserDetails = () => {
  const location = useLocation();
  const { username, mobile } = location.state || { username: "", mobile: "" };

  return (<>
  <FixedNavbar/>
      <div className="user-details-container">
      <h1>User Details</h1>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Mobile:</strong> {mobile}</p>
    </div>
  <FollowersPricing/>
  </>
  );
};

export default UserDetails;
