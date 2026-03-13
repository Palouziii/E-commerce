import NavBar from "../components/Nav";

export default function Home() {
  return (
    <>
      <NavBar />
      <header className="bg-light py-5 border-bottom mb-4">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-7 text-center">
              <h1 className="display-4 fw-bolder mb-2">
                Bienvenue sur notre Plateforme
              </h1>
              <p className="lead fw-normal text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                <a className="btn btn-primary btn-lg px-4 me-sm-3">Commencer</a>
                <a className="btn btn-outline-dark btn-lg px-4">
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5" id="features">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img
                  className="card-img-top"
                  src="https://picsum.photos/600/350"
                  alt="..."
                />
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">
                    Lorem ipsum dolor sit amet
                  </h5>
                  <p className="card-text mb-0">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img
                  className="card-img-top"
                  src="https://picsum.photos/600/350"
                  alt="..."
                />
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">
                    Lorem ipsum dolor sit amet
                  </h5>
                  <p className="card-text mb-0">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img
                  className="card-img-top"
                  src="https://picsum.photos/600/350"
                  alt="..."
                />
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">
                    Lorem ipsum dolor sit amet
                  </h5>
                  <p className="card-text mb-0">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white"> &copy; Loan</p>
        </div>
      </footer>
    </>
  );
}
