//creates the Categoryfilter component and recieves data/ functions from App.jsx
function CategoryFilter ({
  categories,
  selectedCategory,
  onCategoryChange,
})
{
// Returns the category buttons to display on the page
return (
  <div className="category-filter">

    {/* Creates one button for every category */}
    {categories.map((category) =>(

      <button
      // Gives each button a unique key for React
      key={category}

      //Defines this as a normal button
      type="button"

      //Adds "active" class when this category is selected 
      className={
        selectedCategory ===category
        ? "category-button active"
        : "category-button"
      }

      //Runs when the user clicks a category
      onClick={ () => onCategoryChange(category) }
      >
        {/* Displays the category name */}
        {category}
      </button>
    ))}
  </div>
);
}

export default CategoryFilter;