import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import SearchForm from "@components/SearchForm";
import useFetch from "@hooks/useFetch";
import React from "react";

const SearchPage = () => {
    const [searchFormValues, setSearchFormValues] = React.useState({
        mediaType: "movie",
        rating: "All",
        genres: [],
    });

    const array =
        searchFormValues.rating === "All"
            ? [0, 100]
            : searchFormValues.rating.split(" - ").map(Number);
    const ratingQuery =
        searchFormValues.rating === "All"
            ? ""
            : `&vote_average.gte=${array[0] / 10}&vote_average.lte=${array[1] / 10}`;

    const { data } = useFetch({
        url: `/discover/${searchFormValues.mediaType}?with_genres=${searchFormValues.genres.join(",")}${ratingQuery}&sort_by=popularity.desc`,
    });

    return (
        <div className="container flex-col">
            <p className="text-2xl font-bold">Search</p>
            <div className="flex gap-6">
                <div className="flex-1">
                    {<SearchForm setSearchFormValues={setSearchFormValues} />}
                </div>
                <div className="flex-[3]">
                    <RelatedMediaList mediaList={data.results || []} />
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
