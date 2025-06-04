import { useEffect } from "react";

const PaginateIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
    useEffect(() => {
        if (!movies || movies.length <= 1) return;

        const interval = setInterval(() => {
            setActiveMovieId((prevId) => {
                const currentIndex = movies.findIndex((m) => m.id === prevId);

                if (currentIndex === -1) {
                    return movies[0].id;
                }

                const nextIndex = (currentIndex + 1) % movies.length;
                return movies[nextIndex].id;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [movies, setActiveMovieId]);

    return (
        <div className="absolute bottom-[10%] right-8">
            <ul className="flex gap-1">
                {movies.map((movie) => (
                    <li
                        key={movie.id}
                        className={`h-1 w-6 cursor-pointer ${
                            movie.id === activeMovieId
                                ? "bg-slate-100"
                                : "bg-slate-600"
                        }`}
                        onClick={() => setActiveMovieId(movie.id)}
                    ></li>
                ))}
            </ul>
        </div>
    );
};
export default PaginateIndicator;
