import styles from "../App.module.css";
import { For, Index, createMemo } from "solid-js";

type studentData = {
  _studentId: number;
  _name: string;
  subjects: subjectData[];
};

type subjectData = {
  _subjectId: number;
  _name: string;
  score?: number;
};

const tableData: studentData[] = [
  {
    _studentId: 1,
    _name: "John Doe",
    subjects: [
      {
        _subjectId: 1,
        _name: "Maths",
        score: 90,
      },
      {
        _subjectId: 2,
        _name: "English",
        score: 95,
      },
    ],
  },
  {
    _studentId: 2,
    _name: "Jane Smith",
    subjects: [
      {
        _subjectId: 1,
        _name: "Maths",
        score: 85,
      },
      {
        _subjectId: 2,
        _name: "English",
        score: 95,
      },
      {
        _subjectId: 3,
        _name: "Science",
        score: 80,
      },
      {
        _subjectId: 4,
        _name: "History",
        score: 92,
      },
      {
        _subjectId: 5,
        _name: "Geography",
        score: 88,
      },
    ],
  },
  {
    _studentId: 3,
    _name: "Bob Johnson",
    subjects: [
      {
        _subjectId: 1,
        _name: "Maths",
        score: 75,
      },
      {
        _subjectId: 2,
        _name: "English",
        score: 80,
      },
      {
        _subjectId: 3,
        _name: "Science",
        score: 85,
      },
    ],
  },
  {
    _studentId: 4,
    _name: "Alice Williams",
    subjects: [
      {
        _subjectId: 1,
        _name: "Maths",
        score: 90,
      },
      {
        _subjectId: 2,
        _name: "English",
        score: 92,
      },
      {
        _subjectId: 3,
        _name: "Science",
        score: 88,
      },
      {
        _subjectId: 4,
        _name: "History",
        score: 85,
      },
      {
        _subjectId: 5,
        _name: "Geography",
        score: 80,
      },
    ],
  },
  {
    _studentId: 5,
    _name: "Tom Davis",
    subjects: [
      {
        _subjectId: 1,
        _name: "Maths",
        score: 80,
      },
      {
        _subjectId: 2,
        _name: "English",
        score: 85,
      },
      {
        _subjectId: 3,
        _name: "Science",
        score: 90,
      },
      {
        _subjectId: 4,
        _name: "History",
        score: 80,
      },
      {
        _subjectId: 5,
        _name: "Geography",
        score: 82,
      },
    ],
  },
];

const Table = () => {
  const allSubjects = createMemo(() => {
    const subjectArr: string[] = [];

    tableData.forEach(({ subjects }) => {
      subjects.forEach(({ _name, _subjectId }) => {
        const newData = { _name, _subjectId };
        subjectArr.push(JSON.stringify(newData));
      });
    });

    const filteredSub = new Set(subjectArr);
    const final = Array.from(filteredSub).map((data) => JSON.parse(data));

    return final;
  });

  const getScore = (student: studentData, subjectID: number) => {
    const currScore = student.subjects.filter(
      (sub) => sub._subjectId === subjectID
    );
    console.log(currScore);
    return currScore.length === 0 ? "-" : currScore[0].score;
  };

  return (
    <div class={styles.table}>
      <div>
        <p> - </p>
        <For each={tableData}>{(student) => <p>{student._name}</p>}</For>
      </div>

      <div class={styles.tableMain}>
        <For each={allSubjects()}>
          {(subject) => (
            <div>
              <h4>{subject._name}</h4>
              {
                <For each={tableData}>
                  {(student) => <p>{getScore(student, subject._subjectId)}</p>}
                </For>
              }
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default Table;
