import React from "react";

function CategoryFilter({categories, category, setCategory}) {
  
      
  
  const mappedCategories = categories.map((category1) => {
        const className = category1 === category ? "selected" : null
        return ( 
                 <button onClick={() => setCategory(category1)} className={className}>{category1}</button> 
          )
      })
  
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {mappedCategories}
    </div>
  );
}

export default CategoryFilter;
