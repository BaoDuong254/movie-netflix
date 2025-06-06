import PaginateIndicator from "./PaginateIndicator";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import useFetch from "@hooks/useFetch";

const FeatureMovies = () => {
    const [activeMovieId, setActiveMovieId] = useState();

    const { data: popularMoviesResponse } = useFetch({
        url: "/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc?include_video=true",
    });

    const { data: videoResponse } = useFetch(
        {
            url: `/movie/${activeMovieId}/videos`,
        },
        { enabled: !!activeMovieId }
    );

    const movies = (popularMoviesResponse?.results || []).slice(0, 4);

    useEffect(() => {
        if (movies[0]?.id) {
            setActiveMovieId(movies[0].id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(movies)]);

    return (
        <div className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
            <AnimatePresence mode="sync">
                {movies
                    .filter((movie) => movie.id === activeMovieId)
                    .map((movie) => (
                        <motion.div
                            key={movie.id}
                            className="absolute inset-0"
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "-100%", opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <Movie
                                key={movie.id}
                                data={movie}
                                trailerVideoKey={
                                    (videoResponse?.results || []).find(
                                        (video) =>
                                            video.type === "Trailer" &&
                                            video.site === "YouTube"
                                    )?.key
                                }
                            />
                        </motion.div>
                    ))}
            </AnimatePresence>
            <PaginateIndicator
                movies={movies}
                activeMovieId={activeMovieId}
                setActiveMovieId={setActiveMovieId}
            />
        </div>
    );
};
export default FeatureMovies;
