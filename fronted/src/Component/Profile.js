import React from "react";
import { useNavigate } from "react-router-dom";
import "../Component/Profile.css";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const UserId = user._id;
  const UserName = user.name;
  const UserEmail = user.email;

  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  const addProduct = () => {
    navigate("/add");
  };

  return (
    <div className="card border-primary mb-3">
      <img
        src="https://britainlogos.co.uk/images/portfolio/e-commerce/7.jpg"
        alt="John"
      />
      <h1>{UserName}</h1>
      <p className="title">{UserId}</p>
      <p>{UserEmail}</p>

      <button type="submit" onClick={home} className="btn btn-primary">
        <i className="fa fa-home"></i> Go to home
      </button>
      <br></br>
      <button type="submit" onClick={addProduct} className="btn btn-primary">
        <i className="fa fa-plus"></i> Add Product
      </button>
      <br></br>
    </div>
  );
};

export default Profile;
