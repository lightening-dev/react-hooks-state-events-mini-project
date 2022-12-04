import React from "react";
import Task from "./Task";



function TaskList({tasks, handleDeleteClick}) {

  
  
   const taskToDisplay = tasks.map(task =>  (
   
    <Task key={task.text} 
          category={task.category} 
          text={task.text} 
          deleteFunction={handleDeleteClick}/>
   ));
    
  
  
  return (
    <div className="tasks">
      <ul className="eachTask">{ taskToDisplay }</ul>
    </div>
  );
}

export default TaskList;
