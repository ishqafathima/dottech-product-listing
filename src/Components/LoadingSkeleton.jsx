//creates the loadingskeleton component

function LoadingSkeleton() {

  //Returns the skeleton UI that appears while products are loaded

  return (
    <div className="product-grid">

      {/*Creates 8 skeleton product cards */}
      {Array.from({length:8}).map((_, index) => (
        <div
        className="skeleton-card"
        key={index}
        >

          {/* Placeholder for the product image */}
          <div className="skeleton-image"></div>

          <div className= "skeleton-content">

            {/*placeholder for the  category */}
            <div className = "skeleton-category"></div>

            {/* placeholder for the product name */}
            <div className="skeleton-title"></div>

            {/*placeholder for the description */}
            <div className="skeleton-description"></div>

            {/* shorter placeholder for the second description line */}
            <div  className="skeleton-description short"></div>

            {/*placeholder for the price */}
            <div className="skeleton-price"></div>
          </div>
          </div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;