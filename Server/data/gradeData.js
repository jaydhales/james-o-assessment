"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradeData = exports.subjects = void 0;
const uuid_1 = require("uuid");
exports.subjects = {
    maths: { _name: "Maths", _subjectId: (0, uuid_1.v4)() },
    english: { _name: "English", _subjectId: (0, uuid_1.v4)() },
    science: { _name: "Science", _subjectId: (0, uuid_1.v4)() },
    history: { _name: "History", _subjectId: (0, uuid_1.v4)() },
    geography: { _name: "Geography", _subjectId: (0, uuid_1.v4)() },
};
exports.gradeData = [
    {
        _studentId: (0, uuid_1.v4)(),
        _name: "John Doe",
        subjects: [
            Object.assign(Object.assign({}, exports.subjects.maths), { score: 90 }),
            Object.assign(Object.assign({}, exports.subjects.english), { score: 95 }),
        ],
    },
    {
        _studentId: (0, uuid_1.v4)(),
        _name: "Jane Smith",
        subjects: [
            Object.assign(Object.assign({}, exports.subjects.maths), { score: 85 }),
            Object.assign(Object.assign({}, exports.subjects.english), { score: 95 }),
            Object.assign(Object.assign({}, exports.subjects.history), { score: 80 }),
            Object.assign(Object.assign({}, exports.subjects.science), { score: 92 }),
            Object.assign(Object.assign({}, exports.subjects.geography), { score: 88 }),
        ],
    },
    {
        _studentId: (0, uuid_1.v4)(),
        _name: "Bob Johnson",
        subjects: [
            Object.assign(Object.assign({}, exports.subjects.maths), { score: 75 }),
            Object.assign(Object.assign({}, exports.subjects.english), { score: 80 }),
            Object.assign(Object.assign({}, exports.subjects.science), { score: 85 }),
        ],
    },
    {
        _studentId: (0, uuid_1.v4)(),
        _name: "Alice Williams",
        subjects: [
            Object.assign(Object.assign({}, exports.subjects.maths), { score: 90 }),
            Object.assign(Object.assign({}, exports.subjects.english), { score: 92 }),
            Object.assign(Object.assign({}, exports.subjects.science), { score: 88 }),
            Object.assign(Object.assign({}, exports.subjects.history), { score: 85 }),
            Object.assign(Object.assign({}, exports.subjects.geography), { score: 80 }),
        ],
    },
    {
        _studentId: (0, uuid_1.v4)(),
        _name: "Tom Davis",
        subjects: [
            Object.assign(Object.assign({}, exports.subjects.maths), { score: 80 }),
            Object.assign(Object.assign({}, exports.subjects.english), { score: 85 }),
            Object.assign(Object.assign({}, exports.subjects.science), { score: 90 }),
            Object.assign(Object.assign({}, exports.subjects.geography), { score: 80 }),
            Object.assign(Object.assign({}, exports.subjects.history), { score: 82 }),
        ],
    },
];
