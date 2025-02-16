import React from "react";
import "./TaskCard.css";
import Tag from "./Tag.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TaskCard = () => {
  return (
    <article className="task-card">
      <p className="task-text">Lorem ipsum dolor sit amet.</p>

      <div className="task-card-bottom-line">
        <div className="task-card-text">
          <Tag tagName="Standar" />
          <Tag tagName="Penting" />
          <Tag tagName="Prioritas" />
        </div>

        <div className="task-delete">
          <FontAwesomeIcon className="delete-icon" icon={faTrash} />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
