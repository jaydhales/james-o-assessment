import type { Component } from "solid-js";
import styles from "./App.module.css";
import Table from "./components/Table";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <p>Jay Institute of Technology</p>
        <h1>Results for First Semester</h1>
      </header>

      <Table />
    </div>
  );
};

export default App;
