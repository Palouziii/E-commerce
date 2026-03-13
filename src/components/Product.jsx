export default function Product({ product }) {
  return (
    <div class="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
      <div class="col shadow-lg p-2 mb-5 bg-body-tertiary rounded">
        <div class="card h-100 text-center shadow-sm">
          <img
            src={product.image}
            class="card-img-top w-25 mx-auto mt-3 rounded"
            alt={product.name}
          />

          <div class="card-body">
            <h5 class="card-title fw-bold">{product.name}</h5>

            <div class="mb-2">
              <span class="badge bg-primary fs-6">{product.price}€</span>
              <span class="ms-2 text-warning">★ {product.rating}</span>
            </div>

            <p class="card-text small">{product.description}</p>
          </div>

          <div class="card-footer bg-transparent border-0 pb-3">
            <p class="small mb-0">
              <span class="text-success">En stock ({product.stock})</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
