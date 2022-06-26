const ProductTile = ({ product }) => {
  return (
      <div className="card p-3 m-2">
        <div className="card-image" >
          <figure className="image is-3by4">
            <img src={product.imageUrl || ""} alt="product" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{product.name}</p>
              <p className="subtitle is-5"> માત્ર <b>{product.price}/-</b> રૂપિયામાં. </p>
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
