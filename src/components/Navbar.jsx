import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function Navbar() {
  return (
        <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    Movie App
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ms-auto align-items-lg-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Movies
                            </Link>
                        </li>

                        <li className="nav-item ms-lg-3">
                            <Link className="nav-link d-flex align-items-center gap-2" to="/watchlist">
                                <FaHeart />
                                WatchList
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
      </nav>
    );
}

export default Navbar;
