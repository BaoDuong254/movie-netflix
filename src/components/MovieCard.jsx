import React from "react";
import CircularProgressBar from "./CircularProgressBar";
import { Link } from "react-router-dom";

const MovieCard = ({ id, title, release_date, poster, point, mediaType }) => {
    return (
        <Link
            to={`/movie/${id}`}
            className="rounded-lg border border-slate-800"
        >
            <div className="relative">
                {mediaType === "tv" && (
                    <div className="absolute right-1 top-1 rounded bg-black p-1 text-sm font-bold text-white shadow-md">
                        TV Show
                    </div>
                )}
                <img
                    src={`https://image.tmdb.org/t/p/w500${poster}`}
                    alt={title}
                    className="rounded-lg"
                />
                <div className="relative -top-[1.5vw] px-4">
                    <CircularProgressBar
                        percent={Math.round(point * 10)}
                        strokeColor={
                            point >= 7 ? "green" : point >= 5 ? "orange" : "red"
                        }
                    />
                    <p className="mt-2 font-bold">{title}</p>
                    <p className="text-slate-300">{release_date}</p>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
