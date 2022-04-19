import { Request, Response } from "express";

export const findAll = (req: Request, res: Response) => {
  res.send("find all users");
};

export const findOne = (req: Request, res: Response) => {
  res.send("find one user");
};

export const update = (req: Request, res: Response) => {
  res.send("update user");
};

export const deleteUser = (req: Request, res: Response) => {
  res.send("delete user");
};

export const create = (req: Request, res: Response) => {
  res.send("create user");
};
