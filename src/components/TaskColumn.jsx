import React from "react";
import "./TaskColumn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faClipboardCheck, faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title }) => { 

  const iconMap = {
    "Goals": faBullseye,
    "On Progress": faHourglassHalf,
    "Completed": faClipboardCheck
  };

  return (
    <section className="task-column">
      <h2>
        <FontAwesomeIcon className="task-column-icon" icon={iconMap[title]} /> {title}
      </h2>

      <TaskCard />
    </section>
  );
};

export default TaskColumn;
