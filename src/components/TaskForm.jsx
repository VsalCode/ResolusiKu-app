import React, {useState}from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  // const [task, setTask] = useState("")
  // const [status, setStatus] = useState("Goals")

  // const handleTask = (e) => {
  //   setTask(e.target.value)
  // }

  // const handleStatus = (e) =>{
  //   setStatus(e.target.value)
  // }

  // console.log(status, task);
  
  const [taskData, setTaskData] = useState({
    // properties "name"
    task: "",
    status: "goals",
    tags: []
  })

  const checkTag = (tag) =>{
    return taskData.tags.some(item => item === tag)
  }



  const selectTag = (tag) => {
    if(taskData.tags.some(item => item === tag)){
      const filterTags = taskData.tags.filter(item => item != tag)
      setTaskData(prev => {
        return {...prev, tags: filterTags}
      })
    }else{
      setTaskData(prev => {
        return {...prev, tags: [...prev.tags, tag]}
      })
    }
  }


  const handleChange = (e) =>{
    // const name = e.target.name
    // const value = e.target.value
    const {name, value} = e.target;

    setTaskData((prev) =>{
      return {...prev, [name]: value }
    })
    // Note:  Kalau gapake prev, kita akan langsung mengganti state dengan setTaskData({ [name]: value }). ini bisa menyebabkan data yang lain hilang setiap kali input berubah.
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    setTasks(prev =>  {
      return [...prev, taskData]
    } )

    // reset tags when submit new card
    setTaskData({
      task: "",
      status: "Goals",
      tags: []
    })
  }

  return (
    <header className="app-header">
      <form 
      onSubmit={handleSubmit}>
        <input 
        className="task-input" 
        type="text" 
        name="task" 
        value={taskData.task}
        id="task-input" 
        placeholder="Ketik Resolusi mu disini!"
        onChange={handleChange}
        />

        <div className="task-from-bottom-line">
          <div>
            <Tag tagName="Standar" selectTag={selectTag} selected={checkTag("Standar")} />
            <Tag tagName="Penting" selectTag={selectTag} selected={checkTag("Penting")} />
            <Tag tagName="Prioritas" selectTag={selectTag} selected={checkTag("Prioritas")} />
          </div>

          <div>
            <select 
            className="task-status" 
            value={taskData.status}
            name="status" 
            id="task-status"
            onChange={handleChange}
            >
              <option value="Goals">Goals</option>
              <option value="Progress">On Progress</option>
              <option value="Completed">Completed</option>
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
