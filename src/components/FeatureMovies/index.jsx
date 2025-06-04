import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import { useEffect, useState } from "react";

const FeatureMovies = () => {
    const [movies, setMovies] = useState([]);
    const [activeMovieId, setActiveMovieId] = useState();

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular", {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWU2NjdlNThjOTI0YjIyYmM1ZTliYzc2ODNhMDU1OCIsIm5iZiI6MTc0ODUyNDQ0OS44OTY5OTk4LCJzdWIiOiI2ODM4NWRhMWY2YzhkNDQ4M2IyYjg2NDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cfT4egj48nxjEborzkstwfXzFwKVbcaPBWEaLo-cHUY",
            },
        }).then(async (res) => {
            const data = await res.json();
            const popularMovies = data.results.slice(0, 4);
            setMovies(popularMovies);
            setActiveMovieId(popularMovies[0].id);
        });
    }, []);

    return (
        <div className="relative text-white">
            {movies
                .filter((movie) => movie.id === activeMovieId)
                .map((movie) => (
                    <Movie key={movie.id} data={movie} />
                ))}
            <PaginateIndicator
                movies={movies}
                activeMovieId={activeMovieId}
                setActiveMovieId={setActiveMovieId}
            />
        </div>
    );
};
export default FeatureMovies;
