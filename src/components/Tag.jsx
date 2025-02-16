import React from "react";
import './Tag.css'

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    Standar: { backgroundColor: "#3A7D44", color:"white" },
    Penting: { backgroundColor: "#FFB200" , color:"white" },
    Prioritas: { backgroundColor: "#B82132", color:"white" },
    default: { backgroundColor: "#f9f9f9" },
  }

  return (
    <button 
    type="button"
    className="tag" 
    style={selected ? tagStyle[tagName] : tagStyle.default}
    onClick={ () => selectTag(tagName)} >
      {tagName}
    </button>
  )
};

export default Tag;
