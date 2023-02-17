import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const Home = () => {
  const [product, setProduct] = useState([]);
  const name = JSON.parse(localStorage.getItem("user")).name;

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:7000/products");
    result = await result.json();
    setProduct(result);
  };

  return (
    <>
      <br></br>
      <h5>
        <i>Welcome to home {name} !!</i>
      </h5>
      <div className="container my-3 ">
        <div className="row my-3">
          {product.map((element) => {
            return (
              <div className="col-md-4 " key={element._id}>
                <ProductItem
                  name={element.name}
                  price={element.price}
                  company={element.company}
                  category={element.category}
                  id={element._id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
