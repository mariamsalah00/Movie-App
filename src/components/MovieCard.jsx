import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function MovieCard({ movie, watchList, setWatchList }) {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const isFavorite = watchList.some((item) => item.id === movie.id);

    const toggleFavorite = () => {
        if (isFavorite) {
            setWatchList(watchList.filter((item) => item.id !== movie.id));
        } else {
            setWatchList([...watchList, movie]);
        }
    };

    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100 shadow-sm">
                <Link to={`/movie/${movie.id}`}>
                    <img src={imageUrl} className="card-img-top" alt={movie.title} style={{ height: "320px", objectFit: "cover" }} />
                </Link>

                <div className="card-body">
                    <h6 className="card-title">{movie.title}</h6>

                    <p className="text-muted mb-1">{movie.release_date}</p>

                    <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-success">⭐ {movie.vote_average.toFixed(1)}</span>

                        <button className="btn p-0 border-0" onClick={toggleFavorite}>
                            {isFavorite ? <FaHeart color="red" size={20} /> : <FaRegHeart size={20} />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
