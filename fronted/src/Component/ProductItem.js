import React from "react";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  let { name, price, company, category, id } = props;
  const namee = JSON.parse(localStorage.getItem("user")).name;
  let imgUrl = "https://britainlogos.co.uk/images/portfolio/e-commerce/7.jpg";
  return (
    <div className="my-3">
      <div className="card border-info">
        <img className="card-img-top" src={imgUrl} />
        <div className="card border-info mb-3">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">Price - Rs. {price}</li>
              <li className="list-group-item">Category - {category}</li>
              <li className="list-group-item">Company - {company}</li>
            </ul>

            <button type="submit" className="btn btn-primary">
              <Link to={"/update/" + id}>Update</Link>
            </button>
          </div>
        </div>
        <p>added by {namee}</p>
      </div>
    </div>
  );
};

export default ProductItem;
