import React, {useState} from "react";
import "./App.css";
import TaskForm from "./components/TaskForm.jsx";
import TaskColumn from "./components/TaskColumn.jsx";

const App = () => {
  const [tasks, setTasks] = useState([])
  console.log(tasks);
  
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((tasks, index) => index !== taskIndex)
    setTasks(newTasks)
  }

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app-main">
        <TaskColumn title="Goals" tasks={tasks} status="Goals" handleDelete={handleDelete}  />
        <TaskColumn title="On Progress" tasks={tasks} status="Progress" handleDelete={handleDelete} />
        <TaskColumn title="Completed" tasks={tasks} status="Completed" handleDelete={handleDelete} />
      </main>
    </div>
  );
};

export default App;
