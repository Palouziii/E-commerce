export default function CheckoutX() {
  return (
    <div className="card container mt-5" style={{ maxWidth: "15%" }}>
      <h2 className="mb-4">Paiement Rapide</h2>

      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="fs-5">Nombre article</span>
        <strong className="fs-5">6</strong>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="fs-5">Total du panier</span>
        <strong className="fs-5">100 €</strong>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <span className="text-info fs-5">Livraison</span>
        <span className="text-info fs-5">Gratuite</span>
      </div>

      <button type="button" class="btn btn-outline-success m-4">
        PAYER
      </button>
    </div>
  );
}
