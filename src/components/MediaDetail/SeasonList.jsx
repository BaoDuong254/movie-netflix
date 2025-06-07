import CircularProgressBar from "@components/CircularProgressBar";
import ImageComponent from "@components/Image";
import React from "react";

const SeasonList = ({ seasons = [] }) => {
    const [isShowMore, setIsShowMore] = React.useState(false);

    const currentSeasons = isShowMore
        ? seasons.slice(0, 32)
        : seasons.slice(0, 4);
    return (
        <div className="mt-8 text-[1.3vw]">
            <p className="mb-4 text-[1.4vw] font-bold max-sm:text-[5vw]">
                Season
            </p>
            <div className="space-y-4">
                {currentSeasons.map((season) => (
                    <div
                        key={season.id}
                        className="flex gap-4 rounded-lg border border-slate-200 p-3 shadow-md"
                    >
                        <ImageComponent
                            className="w-[25%] rounded-lg"
                            src={
                                season.poster_path &&
                                `https://media.themoviedb.org/t/p/w300${season.poster_path}`
                            }
                            alt={season.name}
                            width={130}
                            height={195}
                        />
                        <div className="space-y-1">
                            <p className="text-[1.4vw] font-bold max-sm:text-[4vw]">
                                {season.name}
                            </p>
                            <div className="flex items-center gap-2">
                                <p className="font-bold max-sm:text-[4vw]">
                                    Rating
                                </p>
                                <CircularProgressBar
                                    percent={Math.round(
                                        (season.vote_average || 0) * 10
                                    )}
                                    size={2.5}
                                    strokeWidth={0.2}
                                />
                            </div>
                            <p className="max-sm:text-[2vw]">
                                <span className="font-bold">
                                    Release Date:{" "}
                                </span>
                                {season.air_date || "N/A"}
                            </p>
                            <p className="max-sm:text-[2vw]">
                                {season.episode_count} Episodes
                            </p>
                            <p className="line-clamp-2 max-sm:text-[2vw]">
                                {season.overview}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <p
                className="mt-1 cursor-pointer"
                onClick={() => {
                    setIsShowMore(!isShowMore);
                }}
            >
                {currentSeasons.length <= 4
                    ? ""
                    : isShowMore
                      ? "Show Less"
                      : "Show More"}
            </p>
        </div>
    );
};

export default SeasonList;
