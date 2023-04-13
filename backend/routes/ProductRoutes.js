import express from "express";
import {
  braintreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteproductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import braintree from "braintree";

const router = express.Router();

// router
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// router
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// get products
router.get("/get-product", getProductController);

// get single product
router.get("/get-product/:slug", getSingleProductController);

// get photo
router.get("/product-photo/:pid", productPhotoController);

// delete product
router.delete("/delete-product/:pid", deleteproductController);

// filter product
router.post("/product-filters", productFiltersController);

// product count
router.get("/product-count", productCountController);

// product per page
router.get("/product-list/:page", productListController);

// search product
router.get("/search/:keyword", searchProductController);

// similar product
router.get("/related-product/:pid/:cid", relatedProductController);

// category wise get
router.get("/product-category/:slug", productCategoryController);

// payments routes
router.get('/braintree/token', braintreeTokenController);

// payments
router.post('/braintree/payment', requireSignIn, braintreePaymentController);

export default router;
