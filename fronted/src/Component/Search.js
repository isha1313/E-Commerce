import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Search = () => {
  let imgUrl = "https://britainlogos.co.uk/images/portfolio/e-commerce/7.jpg";
  const [price, setprice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setcompany] = useState("");
  const [id, setid] = useState();
  const params = useParams();
  const name = params.name;
  const namee = JSON.parse(localStorage.getItem("user")).name;
  console.log(name);
  useEffect(() => {
    console.log(params);
    searching();
  }, []);

  const searching = async () => {
    let result = await fetch(`http://localhost:7000/search/${params.name}`);
    result = await result.json();
    if (result.length>0) {
      setCategory(result.category);
      setprice(result.price);
      setcompany(result.company);
      setid(result._id);
    } else {
      alert("not found");
    }
  };

  return (
    <>
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
    </>
  );
};

export default Search;
