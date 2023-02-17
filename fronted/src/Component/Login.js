import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const Sign = () => {
    navigate("/SignUp");
  };

  const log = async () => {
    if (!email || !password) {
      seterror(true);
      return false;
    }
    let result = await fetch("http://localhost:7000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("please enter correct email and password");
    }
  };

  return (
    <div className="container">
      <form>
        <br></br>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter email"
          />
          {error && !email && (
            <div class="alert alert-warning" role="alert">
              Enter vaild email
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          {error && !password && (
            <div class="alert alert-warning" role="alert">
              Enter vaild password
            </div>
          )}
        </div>
        <button type="submit" onClick={log} className="btn btn-primary">
          Log in
        </button>
        <h5>or</h5>
        <button type="submit" onClick={Sign} className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
