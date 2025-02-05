import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  //getall users
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-users");
      setUsers(data.users);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Layout title={"Dashboard - All Users"}>
      <div
        className="container-fluid m-3 p-3"
        style={{
          backgroundImage: "linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%)",
          height: "72vh",
        }}
      >
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Users</h1>
            {users?.map((u, i) => {
              return (
                <div className="border-dark shadow">
                  <table className="table border-dark shadow">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col"> Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{i + 1}</td>
                      <td>{u?.name}</td>
                      <td>{u?.email}</td>
                      <td>{u?.phone}</td>
                      <td>{u?.address}</td>
                    </tr>
                  </tbody>
                </table> 
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
