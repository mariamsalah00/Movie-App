import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import WatchList from "./pages/Watchlist";

function App() {
    const [watchList, setWatchList] = useState([]);

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home watchList={watchList} setWatchList={setWatchList} />} />

                <Route path="/movie/:id" element={<MovieDetails />} />

                <Route path="/watchlist" element={<WatchList watchList={watchList} />} />

            </Routes>
        </>
    );
}

export default App;
