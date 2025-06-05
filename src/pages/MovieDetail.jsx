import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetail/Banner";
import ActorList from "@components/MediaDetail/ActorList";
import RelatedMediaList from "@/components/MediaDetail/RelatedMediaList";
import MovieInfo from "@components/MediaDetail/MovieInfo";

const MovieDetail = () => {
    const { id } = useParams();
    const [movieInfo, setMovieInfo] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(false);
    const [relatedMovieList, setRelatedMovieList] = React.useState([]);
    // const [isRelatedMovieListLoading, setIsRelatedMovieListLoading] =
    //     React.useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
            {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWU2NjdlNThjOTI0YjIyYmM1ZTliYzc2ODNhMDU1OCIsIm5iZiI6MTc0ODUyNDQ0OS44OTY5OTk4LCJzdWIiOiI2ODM4NWRhMWY2YzhkNDQ4M2IyYjg2NDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cfT4egj48nxjEborzkstwfXzFwKVbcaPBWEaLo-cHUY",
                },
            }
        )
            .then(async (res) => {
                const data = await res.json();
                setMovieInfo(data);
            })
            .catch((error) => {
                console.error("Error fetching movie details:", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    useEffect(() => {
        // setIsRelatedMovieListLoading(true);
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWU2NjdlNThjOTI0YjIyYmM1ZTliYzc2ODNhMDU1OCIsIm5iZiI6MTc0ODUyNDQ0OS44OTY5OTk4LCJzdWIiOiI2ODM4NWRhMWY2YzhkNDQ4M2IyYjg2NDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cfT4egj48nxjEborzkstwfXzFwKVbcaPBWEaLo-cHUY",
            },
        })
            .then(async (res) => {
                const data = await res.json();
                const recommendations = (data.results || []).slice(0, 12);
                setRelatedMovieList(recommendations);
            })
            .catch((error) => {
                console.error("Error fetching movie details:", error);
            })
            .finally(() => {
                // setIsRelatedMovieListLoading(false);
            });
    }, [id]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <Banner mediaInfo={movieInfo} />
            <div className="bg-black text-[1.2vw] text-white">
                <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-8">
                    <div className="flex-[2]">
                        <ActorList actors={movieInfo.credits?.cast || []} />
                        <RelatedMediaList mediaList={relatedMovieList} />
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
