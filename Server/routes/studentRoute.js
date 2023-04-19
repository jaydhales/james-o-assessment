"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gradeData_1 = require("../data/gradeData");
const router = (0, express_1.Router)();
const getData = (req, res) => {
    const studentId = req.query.id;
    //   const studentId = gradeData[0]._studentId;
    const studentData = gradeData_1.gradeData.filter(({ _studentId }) => _studentId === studentId);
    if (studentData.length === 0) {
        res.status(404).send({ message: "Not Found" });
    }
    else {
        res.json(studentData);
    }
};
router.get("/", getData);
exports.default = router;
