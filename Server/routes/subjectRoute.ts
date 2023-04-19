import express, { Express, Request, Response, Router } from "express";
import { subjects, subjectData } from "../data/gradeData";

const router = Router();

const getData = (req: Request, res: Response) => {
  const subjectArr: subjectData[] = [];

  Object.values(subjects).forEach((e) => {
    subjectArr.push(e);
  });

  res.json(subjectArr);
};

router.get("/", getData);

export default router;
