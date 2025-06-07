import Loading from "@components/Loading";
import MovieCard from "@components/MovieCard";
import React from "react";

const RelatedMediaList = ({
    mediaList = [],
    isLoading,
    title,
    className,
    location = "",
}) => {
    return (
        <div className={className}>
            {title && (
                <p className="mb-4 text-[1.4vw] font-bold max-sm:text-[5vw]">
                    {title}
                </p>
            )}
            {isLoading ? (
                <Loading />
            ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                    {mediaList.map((media) => (
                        <MovieCard
                            key={media.id}
                            id={media.id}
                            title={media.title || media.name}
                            release_date={
                                media.release_date || media.first_air_date
                            }
                            poster={media.poster_path}
                            point={media.vote_average}
                            mediaType={media.media_type}
                            location={location}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default RelatedMediaList;
