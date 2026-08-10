import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axiosInstance from "../api/axiosConfig";
import Loading from "../components/Loading";

function MovieDetails() {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        Promise.all([axiosInstance.get(`/movie/${id}`), axiosInstance.get(`/movie/${id}/recommendations`)])
            .then(([movieRes, recRes]) => {
                setMovie(movieRes.data);
                setRecommendations(recRes.data.results);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-4">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="img-fluid rounded shadow" />
                </div>

                <div className="col-lg-8">
                    <h2>{movie.title}</h2>

                    <p className="text-muted">{movie.release_date}</p>

                    <p>{movie.overview}</p>

                    <h5>Genres</h5>

                    <div className="mb-3">
                        {movie.genres.map((genre) => (
                            <span key={genre.id} className="badge bg-warning text-dark me-2">
                                {genre.name}
                            </span>
                        ))}
                    </div>

                    <p>
                        <strong>Rating:</strong> ⭐ {movie.vote_average}
                    </p>

                    <p>
                        <strong>Runtime:</strong> {movie.runtime} min
                    </p>

                    <p>
                        <strong>Language:</strong> {movie.original_language.toUpperCase()}
                    </p>

                    <p>
                        <strong>Status:</strong> {movie.status}
                    </p>

                    <Link to="/" className="btn btn-warning mt-3">
                        Back To Home
                    </Link>
                </div>
            </div>

            <hr className="my-5" />

            <h3 className="mb-4">Recommendations</h3>

            <div className="row">
                {recommendations.slice(0, 6).map((item) => (
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={item.id}>
                        <Link to={`/movie/${item.id}`} className="text-decoration-none text-dark">
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                    alt={item.title}
                                    className="card-img-top"
                                    style={{
                                        height: "280px",
                                        objectFit: "cover",
                                    }}
                                />

                                <div className="card-body">
                                    <h6>{item.title}</h6>

                                    <small className="text-muted">⭐ {item.vote_average}</small>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieDetails;
