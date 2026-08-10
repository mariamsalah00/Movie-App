import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosConfig";
import MovieCard from "../components/MovieCard";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";

function Home({ watchList, setWatchList }) {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        let url = "";

        if (search.trim() === "") {
            url = `/movie/popular?page=${page}`;
        } else {
            url = `/search/movie?query=${search}&page=${page}`;
        }

        axiosInstance
            .get(url)
            .then((res) => {
                setMovies(res.data.results);
                setTotalPages(res.data.total_pages > 500 ? 500 : res.data.total_pages);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [search, page]);

    useEffect(() => {
        setPage(1);
    }, [search]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Popular Movies</h2>

            <Search search={search} setSearch={setSearch} />

            <div className="row">
                {movies.length > 0 ? (
                    movies.map((movie) => <MovieCard key={movie.id} movie={movie} watchList={watchList} setWatchList={setWatchList} />)
                ) : (
                    <h4 className="text-center">No Movies Found</h4>
                )}
            </div>

            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </div>
    );
}

export default Home;
