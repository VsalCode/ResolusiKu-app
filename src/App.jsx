import React from "react";
import "./App.css";
import TaskForm from "./components/taskForm";
import TaskColumn from "./components/TaskColumn";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app-main">
        <TaskColumn title="Goals" />
        <TaskColumn title="On Progress" />
        <TaskColumn title="Completed" />
      </main>
    </div>
  );
};

export default App;
