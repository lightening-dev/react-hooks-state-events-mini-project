import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

    const [details, setDetails] = useState("");
    const [category, setCategory] = useState("Code")

    
      
    
    const optionTags = categories.map((category) => {
          if (category === "All") {
          return null;
          }
              else return <option>{category}</option>
      })

          function handleSubmit(event){
            event.preventDefault();
            console.log(details, category);
            onTaskFormSubmit({text:details, category});
            setDetails("");
            setCategory("Code");
          }
      
        return (
          <form className="new-task-form" onSubmit={handleSubmit}>
            <label>
              Details
              <input type="text"
                      name="details" 
                      value={details}
                      onChange={(event) => setDetails(event.target.value)} />
            </label>
            <label>
              Category
              <select name="category"
                      value={category}
                      onChange={(event) => setCategory(event.target.value)}>
                {optionTags}
              </select>
            </label>
            <input type="submit" value="Add task" />
          </form >
        );
        }

export default NewTaskForm;
