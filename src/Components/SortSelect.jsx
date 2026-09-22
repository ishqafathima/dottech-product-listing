//recieving soring data from App.jsx
function SortSelect({sortOption,onSortChange}) {

  //returning  sorting ui
  return (
    <div className="sort-container">

      {/*connects the lable with selected elements*/}
      <label htmlFor="sort">
        Sort by:
      </label>

      <select 
      //gives the dropdown an id
      id="sort"

      //showing currently selected sorting option
      value={sortOption}

      //runs when usrer select a diffrent sorting option
      onChange={(event) => onSortChange(event.target.value)}

      //CSS used to style the dropdown
      className="sort-select"
      >
        {/*Default sorting option */}
        <option vlaue="default">
          Default
        </option>

        {/*sort products from lowest to highest price*/}
        <option value="price-low">
          Price: Low to High
        </option>

        {/*sort products from highest to lowest price*/}
        <option value="price-high">
          Price: High to Low
        </option>

        {/* sort products alphabetically by name */}
        <option value="name-az">
          Name:A to Z
        </option>
        
        </select>"
    </div>
  );
}

export default SortSelect;