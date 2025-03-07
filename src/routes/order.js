import { Router } from "express";
import { orderController } from "../controllers/index.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { validateData } from "../middlewares/validationMiddleware.js";
import { createOrderSchema, updateOrderSchema } from "../validations/index.js";

export const orderRouter = Router();

//create
orderRouter.post("/", authMiddleware,validateData(createOrderSchema), orderController.create);

//get all
orderRouter.get("/", orderController.findAll);

//get one
orderRouter.get("/:id", orderController.findOne);

//update one
orderRouter.put("/:id",authMiddleware,validateData(updateOrderSchema), orderController.update);

//delete one
orderRouter.delete("/:id",authMiddleware, orderController.delete);
