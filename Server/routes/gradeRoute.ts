import express, { Express, Request, Response, Router } from "express";
import { gradeData } from "../data/gradeData";

const router = Router();

const getData = (req: Request, res: Response) => {
  res.json(gradeData);
};

router.get("/", getData);

export default router;
