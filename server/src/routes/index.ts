import { Router } from "express";
import userRouter from "./userRouter";
import productsRouter from "./productsRouter";

const routes = Router();

routes.use("/user", userRouter);
routes.use("/products", productsRouter);

export default routes;
