const Home = () => (
  <div className="container py-5 text-center">
    <h2 className="mb-3 fw-bold">Welcome to <span className="text-primary">DV_Shop</span></h2>
    <p className="lead text-muted mb-4">Your one-stop shop for the latest Products.</p>

    <div className="row justify-content-center">
      <div className="col-md-8">
        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" 
          alt="Gadgets"
          className="img-fluid rounded shadow-sm mb-4"
        />
        <p className="fs-5">
          Discover cutting-edge smartphones, laptops, accessories, and more. At <strong>SDV.Tech</strong>, we
          bring you handpicked products with amazing deals and fast delivery.
        </p>
        <a href="/products" className="btn btn-primary btn-lg mt-3">
          🛍️ Shop Now
        </a>
      </div>
    </div>
  </div>
);

export default Home;
