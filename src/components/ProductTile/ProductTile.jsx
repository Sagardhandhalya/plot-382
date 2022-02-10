const ProductTile = ({ product }) => {
  return (
    <div class="card p-3 m-2">
      <div class="card-image" style={{ maxHeight: "600px", maxWidth: "400px" }}>
        <figure class="image is-3by4">
          <img src={product.imageUrl || "./logo.jpeg"} alt="Placeholder" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left"></div>
          <div class="media-content">
            <p class="title is-3">{product.name}</p>
            <p class="title is-4">{product.price} Rs.</p>
            <p class="subtitle is-6">5% OFF</p>
          </div>
        </div>

        <div class="content" style={{ maxHeight: "600px", maxWidth: "400px" }}>
          {product.description}
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
