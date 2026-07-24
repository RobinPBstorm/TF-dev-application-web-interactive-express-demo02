import { Router } from "express"
import productController from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.route("/")
    .get(productController.getAllProduct)
    .post(productController.createProduct);

productRouter.route("/:productId")
    .get(productController.getProductById);

export default productRouter;