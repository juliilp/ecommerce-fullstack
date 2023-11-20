import { Router } from "express";
import {
  allUser,
  userEdit,
  userId,
  userDelete,
  userCreate,
} from "../controllers/userController";
const userRouter = Router();

userRouter.param("/:id", userId);
userRouter.delete("/:id", userDelete);
userRouter.get("/allUser", allUser);
userRouter.put("/:id", userEdit);
userRouter.post("/create", userCreate);
export default userRouter;
