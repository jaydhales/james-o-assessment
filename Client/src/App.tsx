import type { Component } from "solid-js";
import styles from "./App.module.css";
import Table from "./components/Table";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h3>Jay Institute of Technology</h3>
        <h1>Results for First Semester</h1>
      </header>

      <Table />
    </div>
  );
};

export default App;
