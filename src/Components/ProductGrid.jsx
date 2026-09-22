//import productcard so we can use it
import ProductCard from "./ProductCard";

//recieving the productsa through props
function ProductGrid({products}) {
 
  //returning the grid that contains all product data
  return (
    <div className="product-grid">

      {/* creates one productcard for each product */}
      {products.map((product) => (

        <ProductCard
        //Gives each product card to unique key
        key={product.id}

        //sending the current product to productcard as a prop
        product={product}
        />
      ))}
    </div>
  );
  
}

export default ProductGrid;