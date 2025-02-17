import React from "react";
import "./TaskCard.css";
import Tag from "./Tag.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TaskCard = ({title, tags}) => {
  return (
    <article className="task-card">
      <p className="task-text">{title}</p>

      <div className="task-card-bottom-line">
        <div className="task-card-tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true} />
          ))}
        </div>

        <div className="task-delete">
          <FontAwesomeIcon className="delete-icon" icon={faTrash} />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
