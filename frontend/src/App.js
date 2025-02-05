import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register.js";
import Login from "./pages/Auth/Login.js";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import AdminOrders from "./pages/Admin/AdminOrders";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/product/:slug" element={<ProductDetails />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/category/:slug" element={<CategoryProduct />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/dashboard" element={<PrivateRoute />}>
          <Route exact path="user" element={<Dashboard />} />
          <Route exact path="user/orders" element={<Orders />} />
          <Route exact path="user/profile" element={<Profile />} />
        </Route>
        <Route exact path="/dashboard" element={<AdminRoute />}>
          <Route exact path="admin" element={<AdminDashboard />} />
          <Route exact path="admin/create-category" element={<CreateCategory />} />
          <Route exact path="admin/create-product" element={<CreateProduct />} />
          <Route exact path="admin/product/:slug" element={<UpdateProduct />} />
          <Route exact path="admin/products" element={<Products />} />
          <Route exact path="admin/users" element={<Users />} />
          <Route exact path="admin/orders" element={<AdminOrders />} />
        </Route>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/policy" element={<Policy />} />
        <Route exact path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
