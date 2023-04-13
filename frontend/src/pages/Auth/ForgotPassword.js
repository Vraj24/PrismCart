import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./../../styles/AuthStyles.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer
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
    <Layout title="Forgot Password E-commerce App">
      <div className="form-container">
        <form
          onSubmit={handleSubmit}
          style={{ width: "400px", marginTop: "50px" }}
        >
          <h2 className="title">RESET PASSWORD</h2>
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
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
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
            RESET
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
