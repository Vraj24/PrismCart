import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "./../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data.message, {
          duration: 3000,
        });
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message, {
          duration: 3000,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!", {
        duration: 3000,
      });
    }
  };

  return (
    <Layout title="Login - PrismCart">
      <div className="form-container">
        <form
          onSubmit={handleSubmit}
          style={{ width: "400px", marginTop: "50px" }}
        >
          <h2 className="title">Log In</h2>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* <button
            type="button"
            style={{ width: "100%", marginBottom:"10px" }}
            className="btn btn-primary"
            onClick={() => {navigate('/forgot-password')}}
          >
            Forgot Password
          </button> */}
          <button
            type="submit"
            style={{ width: "100%" }}
            className="btn btn-primary"
          >
            Sign In
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
