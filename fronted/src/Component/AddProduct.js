import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [price, setprice] = useState("");
  const [category, setCategory] = useState("");
  const [name, setname] = useState("");
  const [company, setcompany] = useState("");
  const [error, seterror] = useState(false);
  const navigate = useNavigate();

  const add = async () => {
    if (!name || !price || !category || !company) {
      seterror(true);
      return false;
    }
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.log(userId);
    let result = await fetch("http://localhost:7000/addProduct", {
      method: "post",
      body: JSON.stringify({ name, price, category, userId, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Product is added");
      navigate("/");
    }
  };

  return (
    <div className="card border-info">
      <br></br>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Product Name</label>
          <input
            type="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Product Name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          {error && !name && (
            <div class="alert alert-warning" role="alert">
              Enter vaild product name
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Category</label>
          <input
            type="name"
            value={category}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Ex: Mobile"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          {error && !category && (
            <div class="alert alert-warning" role="alert">
              Enter vaild category
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Price</label>
          <input
            type="price"
            value={price}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Ex: 8900"
            onChange={(e) => {
              setprice(e.target.value);
            }}
          />
          {error && !price && (
            <div class="alert alert-warning" role="alert">
              Enter vaild price
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Company</label>
          <input
            type="Company"
            value={company}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Ex: Samsung"
            onChange={(e) => {
              setcompany(e.target.value);
            }}
          />
          {error && !company && (
            <div class="alert alert-warning" role="alert">
              Enter vaild name
            </div>
          )}
        </div>
        <button type="submit" onClick={add} className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
