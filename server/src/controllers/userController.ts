import { Request, Response } from "express";

const userEdit = (req: Request, res: Response) => {
  res.send("Usuario edit");
};
const userDelete = (req: Request, res: Response) => {
  res.send("Usuario delete");
};
const allUser = (req: Request, res: Response) => {
  res.send("Todos los usuarios");
};
const userId = (req: Request, res: Response) => {
  res.send("Usuario Id");
};

const userCreate = (req: Request, res: Response) => {
  res.send("Creando user");
};

export { userEdit, userDelete, allUser, userId, userCreate };
