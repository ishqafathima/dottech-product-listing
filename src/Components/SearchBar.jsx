// Receives search data/functions from App.jsx
function SearchBar({ searchTerm, onSearch }) {

  // Return the search input UI
  return (
    <div className="search-container">
      <input
        // Tells the browser this is a text input
        type="text"

        // Text shows when input is empty
        placeholder="Search products..."

        // Displays current search value
        value={searchTerm}

        // Runs whenever user types something
        onChange={(event) => onSearch(event.target.value)}

        // CSS class for the search input
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;