//creates the ProductCard component and recieves one product through props

function ProductCard({product}) {

  //Return the UI for one product card
  return (
    <article className="product-card">

      {/* Container for the product image*/}
      <div className= " product-image-container">
        <img 
        //getting image url from the product object
        src={product.image}

        //using product name as alternative text for the image
        alt={product.name}

        //CSS class used to style the image
        className="product-image"
        />
      </div>

      <div className="product-content">

        {/* display the product category*/}
        <span className="product-category">
          {product.category}
        </span>

        {/* display product name*/}
        <h3 className ="product-name">
          {product.name}
        </h3>

        {/*display the product description*/}
        <p className="product-description">
          {product.description}
          </p>
        {/*display the product price with two decimal places*/}
        <p className="product-price">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </article>
  );
}

export default ProductCard;