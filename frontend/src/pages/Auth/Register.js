import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./../../styles/AuthStyles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data.message, {
          duration: 3000,
        });
        navigate("/login");
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
    <Layout title="Register - E-commerce App">
      <div className="form-container">
        <form
          onSubmit={handleSubmit}
          style={{ width: "400px", marginTop: "0px" }}
        >
          <h2 className="title">REGISTER FORM</h2>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your E-mail"
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
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Birth Place"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            style={{ width: "100%" }}
            className="btn btn-primary"
          >
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;