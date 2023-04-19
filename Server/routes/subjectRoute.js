"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gradeData_1 = require("../data/gradeData");
const router = (0, express_1.Router)();
const getData = (req, res) => {
    const subjectArr = [];
    Object.values(gradeData_1.subjects).forEach((e) => {
        subjectArr.push(e);
    });
    res.json(subjectArr);
};
router.get("/", getData);
exports.default = router;
