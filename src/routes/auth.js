import { Router } from "express";
import { authController } from "../controllers/index.js";
import { validateData } from "../middlewares/validationMiddleware.js";
import { signInSchema, signUpSchema } from "../validations/index.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const authRouter = Router();

authRouter.post("/signup", validateData(signUpSchema), authController.signup);
authRouter.post("/signin", validateData(signInSchema), authController.signin);
authRouter.get("/profile", authMiddleware, authController.profile);
