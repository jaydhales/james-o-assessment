import styles from "../App.module.css";
import {
  For,
  Index,
  JSX,
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";

type studentData = {
  _studentId: string;
  _name: string;
  subjects: subjectData[];
};

type subjectData = {
  _subjectId: string;
  _name: string;
  score?: number;
};

const Table = () => {
  const [activeCol, setActiveCol] = createSignal("");
  const [subjects, setSubjects] = createSignal<subjectData[]>([]);
  const [tableData, setTableData] = createSignal<studentData[]>([]);
  let mainRef;

  // createEffect(() => {
  //   function handleClick(ev: Event) {
  //     if (mainRef && mainRef.contains(this)) {
  //       console.log(this);
  //     }

  //     console.log(this);
  //   }
  //   document.body.addEventListener("click", handleClick);

  //   onCleanup(() => document.body.removeEventListener("click", handleClick));
  // });

  onMount(async () => {
    const res = await fetch("http://localhost:5000/api/subjects");
    const gradeRes = await fetch("http://localhost:5000/api/grades");

    setSubjects(await res.json());
    setTableData(await gradeRes.json());
  });

  const getScore = (student: studentData, subjectID: string) => {
    const currScore = student.subjects.filter(
      (sub) => sub._subjectId === subjectID
    );
    return currScore.length === 0 ? "-" : currScore[0].score;
  };

  return (
    <div class={styles.table}>
      <div class={styles.tableCol}>
        <h4></h4>
        <For each={tableData()}>{(student) => <p>{student._name}</p>}</For>
      </div>

      <div class={styles.tableMain} ref={mainRef}>
        <For each={subjects()}>
          {(subject) => (
            <div
              class={`${styles.tableCol} ${
                activeCol() === subject._subjectId ? styles.colActive : null
              }`}
              onClick={() => setActiveCol(subject._subjectId)}
            >
              <h4>{subject._name}</h4>
              {
                <For each={tableData()}>
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
