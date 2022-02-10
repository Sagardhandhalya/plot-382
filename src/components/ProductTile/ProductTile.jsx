const ProductTile = ({ product }) => {
  return (
    <div className="card p-3 m-2">
      <div className="card-image" style={{ maxHeight: "600px", maxWidth: "400px" }}>
        <figure className="image is-3by4">
          <img src={product.imageUrl || ""} alt="product image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left"></div>
          <div className="media-content">
            <p className="title is-3">{product.name}</p>
            <p className="title is-4">{product.price} Rs.</p>
            <p className="subtitle is-6">5% OFF</p>
          </div>
        </div>

        <div className="content" style={{ maxHeight: "600px", maxWidth: "400px" }}>
          {product.description}
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
