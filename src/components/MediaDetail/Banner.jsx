import React from "react";
import CircularProgressBar from "../CircularProgressBar";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { groupBy } from "lodash";
import ImageComponent from "@components/Image";
import { useModalContext } from "@context/ModalProvider";

const Banner = ({
    title,
    backdrop_path,
    poster_path,
    certification,
    crews,
    genres,
    release_date,
    point = 0,
    overview = "No overview available for this movie.",
    trailerVideoKey,
}) => {
    const groupedCrews = groupBy(crews, "job");

    const { openPopup } = useModalContext();

    return (
        <div className="relative overflow-hidden bg-black text-white shadow-sm shadow-slate-800">
            <ImageComponent
                src={
                    backdrop_path &&
                    `https://image.tmdb.org/t/p/original${backdrop_path}`
                }
                alt={title}
                className="absolute inset-0 aspect-video h-full w-full object-cover brightness-[.2]"
                width={1920}
                height={1080}
            />
            <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
                <div className="flex-1">
                    <ImageComponent
                        src={
                            poster_path &&
                            `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`
                        }
                        alt={title}
                        width={600}
                        height={900}
                    />
                </div>
                <div className="flex-[2] text-[1.2vw]">
                    <p className="mb-2 text-[2vw] font-bold max-sm:text-[5vw]">
                        {title}
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="border border-gray-400 p-1 text-gray-400 max-sm:text-[3vw]">
                            {certification}
                        </span>
                        <p className="max-sm:text-[3vw]">{release_date}</p>
                        <p className="max-sm:text-[3vw]">
                            {(genres || [])
                                .map((genre) => genre.name)
                                .join(", ")}
                        </p>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                        <div className="flex items-center gap-2 max-sm:text-[3vw]">
                            <CircularProgressBar
                                percent={Math.round(point * 10)}
                                size={3.5}
                                strokeWidth={0.3}
                            />{" "}
                            Rating
                        </div>
                        <button
                            onClick={() => {
                                openPopup(
                                    <iframe
                                        title="Trailer"
                                        className="aspect-video w-[50vw]"
                                        src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                                    />
                                );
                            }}
                            className="max-sm:text-[3vw]"
                        >
                            <FontAwesomeIcon icon={faPlay} className="mr-1" />
                            Trailer
                        </button>
                    </div>
                    <div className="mt-4">
                        <p className="mb-2 text-[1.3vw] font-bold max-sm:text-[4vw]">
                            Overview
                        </p>
                        <p className="max-sm:text-[3vw]">{overview}</p>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2 max-sm:text-[2vw]">
                        {Object.keys(groupedCrews).map((job) => (
                            <div key={job}>
                                <p className="font-bold">{job}</p>
                                <p>
                                    {groupedCrews[job]
                                        .map((crew) => crew.name)
                                        .join(", ") || "N/A"}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
