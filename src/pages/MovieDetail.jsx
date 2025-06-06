import React from "react";
import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@/components/MediaDetail/RelatedMediaList";
import MovieInfo from "@components/MediaDetail/MovieInfo";
import useFetch from "@hooks/useFetch";

const MovieDetail = () => {
    const { id } = useParams();

    const { data: movieInfo, isLoading } = useFetch({
        url: `/movie/${id}?append_to_response=release_dates,credits,videos`,
    });

    const { data: recommendationsResponse, isLoading: isRelatedMoviesLoading } =
        useFetch({
            url: `/movie/${id}/recommendations`,
        });

    const relatedMovieList = recommendationsResponse?.results || [];

    if (isLoading) {
        return <Loading />;
    }

    const certification =
        (
            (movieInfo.release_dates?.results || []).find(
                (result) => result.iso_3166_1 === "US"
            )?.release_dates || []
        ).find((date) => date.certification)?.certification || "N/A";

    const crews = (movieInfo.credits?.crew || [])
        .filter((crew) =>
            ["Director", "Writer", "Screenplay"].includes(crew.job)
        )
        .map((crew) => ({
            id: crew.id,
            name: crew.name,
            job: crew.job,
        }));

    return (
        <div>
            <Banner
                title={movieInfo.title}
                backdrop_path={movieInfo.backdrop_path}
                poster_path={movieInfo.poster_path}
                release_date={movieInfo.release_date}
                point={movieInfo.vote_average}
                overview={movieInfo.overview}
                genres={movieInfo.genres}
                certification={certification}
                crews={crews}
                trailerVideoKey={
                    movieInfo.videos?.results?.find(
                        (video) => video.type === "Trailer"
                    )?.key
                }
            />
            <div className="bg-black text-[1.2vw] text-white">
                <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-8">
                    <div className="flex-[2]">
                        <ActorList actors={movieInfo.credits?.cast || []} />
                        <RelatedMediaList
                            mediaList={relatedMovieList}
                            isLoading={isRelatedMoviesLoading}
                        />
                    </div>
                    <div className="flex-1">
                        <MovieInfo movieInfo={movieInfo} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
