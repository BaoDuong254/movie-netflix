import React from "react";
import CircularProgressBar from "./CircularProgressBar";
import { Link } from "react-router-dom";
import ImageComponent from "./Image";

const MovieCard = ({
    id,
    title,
    release_date,
    poster,
    point,
    mediaType,
    location = "",
}) => {
    return (
        <Link
            to={mediaType === "tv" ? `/tv/${id}` : `/movie/${id}`}
            className="rounded-lg border border-slate-800 duration-300 ease-in-out hover:-translate-y-1"
        >
            <div className="relative">
                {mediaType === "tv" && (
                    <div className="absolute right-1 top-1 rounded bg-black p-1 text-sm font-bold text-white shadow-md max-sm:text-xs">
                        TV Show
                    </div>
                )}
                <ImageComponent
                    src={poster && `https://image.tmdb.org/t/p/w500${poster}`}
                    alt={title}
                    className="w-full rounded-lg"
                    width={210}
                    height={300}
                />
                <div className="relative -top-[1.5vw] px-4">
                    <CircularProgressBar
                        percent={Math.round(point * 10)}
                        strokeColor={
                            point >= 7 ? "green" : point >= 5 ? "orange" : "red"
                        }
                    />
                    <p className="mt-2 font-bold max-sm:text-xl">{title}</p>
                    <p
                        className={`${location === "search" ? "text-slate-800" : "text-slate-300"} max-sm:text-sm`}
                    >
                        {release_date}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
