import { Link } from "react-router-dom";

function WatchList({ watchList }) {
    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">My Watch List</h2>

            {watchList.length === 0 ? (
                <div className="text-center">
                    <h4>No movies added yet.</h4>

                    <Link to="/" className="btn btn-warning mt-3">
                        Browse Movies
                    </Link>
                </div>
            ) : (
                <div className="row">
                    {watchList.map((movie) => (
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={movie.id}>
                            <div className="card h-100 shadow-sm">
                                <Link to={`/movie/${movie.id}`}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        className="card-img-top"
                                        alt={movie.title}
                                        style={{
                                            height: "320px",
                                            objectFit: "cover",
                                        }}
                                    />
                                </Link>

                                <div className="card-body">
                                    <h6 className="card-title">{movie.title}</h6>

                                    <p className="text-muted mb-1">{movie.release_date}</p>

                                    <span className="badge bg-success">⭐ {movie.vote_average.toFixed(1)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default WatchList;
