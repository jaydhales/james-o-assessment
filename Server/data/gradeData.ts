import { v4 as uuid } from "uuid";

type studentData = {
  _studentId: string;
  _name: string;
  subjects: subjectData[];
};

export type subjectData = {
  _subjectId: string;
  _name: string;
  score?: number;
};

export const subjects = {
  maths: { _name: "Maths", _subjectId: uuid() },
  english: { _name: "English", _subjectId: uuid() },
  science: { _name: "Science", _subjectId: uuid() },
  history: { _name: "History", _subjectId: uuid() },
  geography: { _name: "Geography", _subjectId: uuid() },
};

export const gradeData: studentData[] = [
  {
    _studentId: uuid(),
    _name: "John Doe",
    subjects: [
      {
        ...subjects.maths,
        score: 90,
      },
      {
        ...subjects.english,
        score: 95,
      },
    ],
  },
  {
    _studentId: uuid(),
    _name: "Jane Smith",
    subjects: [
      {
        ...subjects.maths,
        score: 85,
      },
      {
        ...subjects.english,
        score: 95,
      },
      {
        ...subjects.history,
        score: 80,
      },
      {
        ...subjects.science,
        score: 92,
      },
      {
        ...subjects.geography,
        score: 88,
      },
    ],
  },
  {
    _studentId: uuid(),
    _name: "Bob Johnson",
    subjects: [
      {
        ...subjects.maths,
        score: 75,
      },
      {
        ...subjects.english,
        score: 80,
      },
      {
        ...subjects.science,
        score: 85,
      },
    ],
  },
  {
    _studentId: uuid(),
    _name: "Alice Williams",
    subjects: [
      {
        ...subjects.maths,
        score: 90,
      },
      {
        ...subjects.english,
        score: 92,
      },
      {
        ...subjects.science,
        score: 88,
      },
      {
        ...subjects.history,
        score: 85,
      },
      {
        ...subjects.geography,
        score: 80,
      },
    ],
  },
  {
    _studentId: uuid(),
    _name: "Tom Davis",
    subjects: [
      {
        ...subjects.maths,
        score: 80,
      },
      {
        ...subjects.english,
        score: 85,
      },
      {
        ...subjects.science,
        score: 90,
      },
      {
        ...subjects.geography,
        score: 80,
      },
      {
        ...subjects.history,
        score: 82,
      },
    ],
  },
];
