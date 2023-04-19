import express, { Express, Request, Response, Router } from "express";
import { gradeData } from "../data/gradeData";

const router = Router();

const getData = (req: Request, res: Response) => {
  const studentId = req.query.id;
  //   const studentId = gradeData[0]._studentId;

  const studentData = gradeData.filter(
    ({ _studentId }) => _studentId === studentId
  );
  if (studentData.length === 0) {
    res.status(404).send({ message: "Not Found" });
  } else {
    res.json(studentData);
  }
};

router.get("/", getData);

export default router;
