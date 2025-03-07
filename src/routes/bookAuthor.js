import { Router } from "express";
import { bookAuthorController } from "../controllers/index.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { createbookAuthorSchema } from "../validations/index.js";
import { validateData } from "../middlewares/validationMiddleware.js";

export const bookAuthorRouter = Router();

//create
bookAuthorRouter.post("/", authMiddleware,validateData(createbookAuthorSchema), bookAuthorController.create);

//get all
bookAuthorRouter.get("/", bookAuthorController.findAll);

//get one
bookAuthorRouter.get("/:id", bookAuthorController.findOne);

//update one
bookAuthorRouter.put("/:id", authMiddleware,bookAuthorController.update);

//delete one
bookAuthorRouter.delete("/:id", authMiddleware,bookAuthorController.delete);
