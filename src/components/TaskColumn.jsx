import React from "react";
import "./TaskColumn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faClipboardCheck, faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, tasks, status }) => {
  const iconMap = {
    Goals: faBullseye,
    "On Progress": faHourglassHalf,
    Completed: faClipboardCheck,
  };

  return (
    <section className="task-column">
      <h2>
        <FontAwesomeIcon className="task-column-icon" icon={iconMap[title]} /> {title}
      </h2>

      {tasks.map((task, index) => task.status === status && <TaskCard key={index} title={task.task} tags={task.tags} />)}
    </section>
  );
};

export default TaskColumn;
