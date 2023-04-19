import express, { Express, Request, Response } from "express";
import gradeRoute from "./routes/gradeRoute";
import subjectRoute from "./routes/subjectRoute";
import studentRoute from "./routes/studentRoute";

const app = express();

app.use("/api/grades", gradeRoute);
app.use("/api/subjects", subjectRoute);
app.use("/api/student/:id", studentRoute);

app.listen(3000);
