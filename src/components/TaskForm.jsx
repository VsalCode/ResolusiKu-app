import React from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  return (
    <header className="app-header">
      <form action="">
        <input className="task-input" type="text" name="task_input" id="task-input" placeholder="Ketik Resolusi mu disini!" />

        <div className="task-from-bottom-line">
          <div>
            <Tag tagName="Standar" />
            <Tag tagName="Penting" />
            <Tag tagName="Prioritas" />
          </div>

          <div>
            <select className="task-status" name="task-status" id="task-status">
              <option value="todo">Goals</option>
              <option value="doing">On Progress</option>
              <option value="done">Completed</option>
            </select>

            <button className="task-submit" type="submit">
              {" "}
              + Tambah Resolusi{" "}
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
