import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [price, setprice] = useState("");
  const [category, setCategory] = useState("");
  const [name, setname] = useState("");
  const [company, setcompany] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    console.log(params);
    getProduct();
  }, []);

  const getProduct = async () => {
    let result = await fetch(`http://localhost:7000/update/${params.id}`);
    result = await result.json();
    setname(result.name);
    setCategory(result.category);
    setprice(result.price);
    setcompany(result.company);
  };

  const updateProduct = async () => {
    let result = await fetch(`http://localhost:7000/update/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, category, price, company }),
      headers: {
        "content-Type": "application/json",
      },
    });
    result = await result.json();
    navigate("/");
    console.log(result);
  };

  return (
    <div className="card border-info">
      <form>
        <br></br>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Product name</label>
          <input
            type="name"
            className="form-control"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Category</label>
          <input
            className="form-control"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Price</label>
          <input
            className="form-control"
            value={price}
            onChange={(e) => {
              setprice(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Company</label>
          <input
            className="form-control"
            value={company}
            onChange={(e) => {
              setcompany(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={updateProduct}
        >
          Update
        </button>
        <br></br>
      </form>
    </div>
  );
};

export default Update;
