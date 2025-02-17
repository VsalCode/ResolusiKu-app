import React, {useState} from "react";
import "./App.css";
import TaskForm from "./components/TaskForm.jsx";
import TaskColumn from "./components/TaskColumn.jsx";

const App = () => {
  const [tasks, setTasks] = useState([])
  console.log(tasks);
  

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app-main">
        <TaskColumn title="Goals" tasks={tasks} status="Goals" />
        <TaskColumn title="On Progress" tasks={tasks} status="Progress" />
        <TaskColumn title="Completed" tasks={tasks} status="Completed" />
      </main>
    </div>
  );
};

export default App;
