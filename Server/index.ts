import express, { Express, Request, Response } from "express";
import gradeRoute from "./routes/gradeRoute";
import subjectRoute from "./routes/subjectRoute";
import studentRoute from "./routes/studentRoute";
import cors from "cors";

const app = express();

app.use(cors());
app.use("/api/grades", gradeRoute);
app.use("/api/subjects", subjectRoute);
app.use("/api/student/:id", studentRoute);

app.listen(3000, () => {
  console.log(`Server running at http://localhost:${3000}/`);
});
