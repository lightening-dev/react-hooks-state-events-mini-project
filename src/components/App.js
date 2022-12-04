import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });




function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  
  function handleDeleteClick(taskName){
    //const task = tasks.filter((task) => task.text != taskName )
    setTasks(tasks.filter((task) => task.text !== taskName ))
   console.log (taskName)
   
  }
      function onTaskFormSubmit(newTask) {
        console.log(newTask);
            setTasks([...tasks, newTask]);
      }
  // handleDeleteClick function taks in a parameter called taskName
  // then it creates a new array called task, which is populated my the tasks state
  // that is populated by the TASKS default State, that is filtered through. 
  // our function took each task and returned it if it was not equal to taskName
  // setTask setter function set

  // const visibleTasks = tasks.filter(
  //   task => category === "All" || category === task.category
  // )
  const visibleTasks = tasks.filter((task) => {
      return (  category === "All" || task.category === category );
  })
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} category={category} setCategory={setCategory}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} category={category} setCategory={setCategory}/>
      <TaskList tasks={visibleTasks} handleDeleteClick={handleDeleteClick}/>
    </div>
  );
}

export default App;
