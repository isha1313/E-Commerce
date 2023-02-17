import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const Log = () => {
    navigate("/Login");
  };

  const collection = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:7000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="container">
      <form>
        <br></br>
        <div className="form-group">
          <label htmlFor="exampleInputName">Full Name</label>
          <input
            type="Name"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setname(e.target.value);
            }}
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="Password"
          />
        </div>
        <button type="submit" onClick={collection} className="btn btn-primary">
          Sign Up
        </button>
        <h5>or</h5>
        <button type="submit" onClick={Log} className="btn btn-primary">
          Log in
        </button>
      </form>
    </div>
  );
};

export default SignUp;
