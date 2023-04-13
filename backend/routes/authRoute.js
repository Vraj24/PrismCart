import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
// REGISTER || METHOD POST
router.post("/register", registerController);

// login || post
router.post("/login", loginController);

// forget password || post
router.post("/forgot-password", forgotPasswordController);

// test routes
router.get("/test", requireSignIn, isAdmin, testController);

// protected route for user
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected route for Admin
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// update
router.put('/profile', requireSignIn, updateProfileController);

// orders
router.get('/orders', requireSignIn, getOrdersController)

// all orders
router.get('/all-orders', requireSignIn,isAdmin, getAllOrdersController)

// order status update
router.put('/order-status/:orderId', requireSignIn, isAdmin, orderStatusController);

export default router;
