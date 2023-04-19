"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gradeRoute_1 = __importDefault(require("./routes/gradeRoute"));
const subjectRoute_1 = __importDefault(require("./routes/subjectRoute"));
const studentRoute_1 = __importDefault(require("./routes/studentRoute"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/api/grades", gradeRoute_1.default);
app.use("/api/subjects", subjectRoute_1.default);
app.use("/api/student/:id", studentRoute_1.default);
app.listen(5000);
