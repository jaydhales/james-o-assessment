"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gradeData_1 = require("../data/gradeData");
const router = (0, express_1.Router)();
const getData = (req, res) => {
    res.json(gradeData_1.gradeData);
};
router.get("/", getData);
exports.default = router;
