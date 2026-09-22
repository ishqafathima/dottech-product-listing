// Brings everything together

import { useEffect, useState } from "react";
import products from "./Data/products.js";
import ProductGrid from "./Components/ProductGrid";
import SearchBar from "./Components/SearchBar";
import CategoryFilter from "./Components/CategoryFilter";
import SortSelect from "./Components/SortSelect";
import LoadingSkeleton from "./Components/LoadingSkeleton";

import "./App.css";

function App() {

  // State for search, category, sorting, loading and theme
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Available product categories
  const categories = [
    "All",
    "Electronics",
    "Accessories",
    "Home",
  ];

  // Simulate a short loading time when the page opens
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Filter products by search term and selected category
  // then apply the selected sorting option
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOption === "price-low") {
        return a.price - b.price;
      }

      if (sortOption === "price-high") {
        return b.price - a.price;
      }

      if (sortOption === "name-az") {
        return a.name.localeCompare(b.name);
      }

      return 0;
    });

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>

      {/* Toggle between light and dark themes */}
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <header className="page-header">
        <p className="eyebrow">DOTTECH STORE</p>

        <h1>Discover Products</h1>

        <p className="header-description">
          Browse our collection of carefully selected products.
        </p>

        {/* Search products by name */}
        <SearchBar
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
        />

        {/* Filter products by category */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Sort products by price or name */}
        <SortSelect
          sortOption={sortOption}
          onSortChange={setSortOption}
        />
      </header>

      <main className="products-section">

        {/* Show loading skeleton, products, or no-results message */}
        {loading ? (
          <LoadingSkeleton />
        ) : filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="no-results">
            <h2>No results found</h2>
            <p>
              Try searching for another product or selecting
              a different category.
            </p>
          </div>
        )}

      </main>
    </div>
  );
}

export default App;