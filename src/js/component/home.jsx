import React, { useState } from "react";
import reactDom from "react"

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleAddTask = () => {
    // Check if input value is empty before adding to list
    if (inputValue.trim()) { 
      setToDoList([...toDoList, inputValue]);
      setInputValue(""); 
    } else {
      alert("Please enter a task!"); // Inform user about empty input
    }
  }
  function handleDelete(index) {
    setToDoList(toDoList.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="nav">
        <h2>To-DO-List</h2>
        <div className="user-input">
          <input
            id="input"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            type="text"
            placeholder="Enter a task..." 
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      </div>
      <div className="container">
        <div className="To-do items">
          <ul>
            {toDoList.map((task, index) => (
            <li key={index}>
            {task} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
            ))}
			
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

