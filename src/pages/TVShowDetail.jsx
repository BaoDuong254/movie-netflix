import React from "react";
import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@/components/MediaDetail/RelatedMediaList";
import TVInfo from "@components/MediaDetail/TVInfo";
import useFetch from "@hooks/useFetch";
import SeasonList from "@components/MediaDetail/SeasonList";

const TVShowDetail = () => {
    const { id } = useParams();

    const { data: tvInfo, isLoading } = useFetch({
        url: `/tv/${id}?append_to_response=content_ratings,aggregate_credits,videos`,
    });

    const {
        data: recommendationsResponse,
        isLoading: isRecommendationLoading,
    } = useFetch({
        url: `/tv/${id}/recommendations`,
    });

    const relatedTVShow = recommendationsResponse?.results || [];

    const certification =
        (tvInfo.content_ratings?.results || []).find(
            (result) => result.iso_3166_1 === "US"
        )?.rating || "N/A";

    const crews = (tvInfo.aggregate_credits?.crew || [])
        .filter((crew) => {
            const jobs = (crew.jobs || []).map((j) => j.job);
            return ["Director", "Writer"].some((job) =>
                jobs.find((j) => j === job)
            );
        })
        .slice(0, 5)
        .map((crew) => ({
            id: crew.id,
            name: crew.name,
            job: crew.jobs[0].job,
        }));

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <Banner
                title={tvInfo.title}
                backdrop_path={tvInfo.backdrop_path}
                poster_path={tvInfo.poster_path}
                release_date={tvInfo.first_air_date}
                point={tvInfo.vote_average}
                overview={tvInfo.overview}
                genres={tvInfo.genres}
                certification={certification}
                crews={crews}
                trailerVideoKey={
                    (tvInfo.videos?.results || []).find(
                        (video) => video.type === "Trailer"
                    )?.key
                }
            />
            <div className="bg-black text-[1.2vw] text-white">
                <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-8">
                    <div className="flex-[2]">
                        <ActorList
                            actors={(tvInfo.aggregate_credits?.cast || []).map(
                                (actor) => ({
                                    ...actor,
                                    character:
                                        actor.roles?.[0]?.character || "N/A",
                                    episode_count:
                                        actor.roles?.[0]?.episode_count || 0,
                                })
                            )}
                        />
                        <SeasonList
                            seasons={(tvInfo.seasons || []).reverse()}
                        />
                        <RelatedMediaList
                            mediaList={relatedTVShow}
                            isLoading={isRecommendationLoading}
                            title="More like this"
                            className="mt-6"
                        />
                    </div>
                    <div className="flex-1">
                        <TVInfo tvInfo={tvInfo} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TVShowDetail;
