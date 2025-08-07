import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaTypeInput from "./FormInputs/MediaTypeInput";
import GenresInput from "./FormInputs/GenresInput";
import RatingInput from "./FormInputs/RatingInput";
import { useSearchParams } from "react-router-dom";

const SearchForm = ({ setSearchFormValues }) => {
    const [searchParams] = useSearchParams();
    const mediaTypeParam = searchParams.get("mediaType");

    const { handleSubmit, control, watch, reset } = useForm({
        defaultValues: {
            mediaType: ["tv", "movie"].includes(mediaTypeParam)
                ? mediaTypeParam
                : "movie",
            genres: [],
            rating: "All",
        },
    });

    const onSubmit = (data) => {
        console.log("Form submitted with data:", data);
    };

    const formValues = watch();

    useEffect(() => {
        reset({
            mediaType: ["tv", "movie"].includes(mediaTypeParam)
                ? mediaTypeParam
                : "movie",
            genres: [],
            rating: "All",
        });
    }, [mediaTypeParam, reset]);

    const formValuesString = JSON.stringify(formValues);

    useEffect(() => {
        setSearchFormValues(formValues);
    }, [formValuesString, setSearchFormValues, formValues]);

    return (
        <div className="rounded-lg border p-4 shadow-md">
            <form
                action=""
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
            >
                <FormField
                    name="mediaType"
                    label="Media Type"
                    control={control}
                    Component={MediaTypeInput}
                />
                <FormField
                    name="genres"
                    label="Genres"
                    control={control}
                    Component={GenresInput}
                />
                <FormField
                    name="rating"
                    label="Rating"
                    control={control}
                    Component={RatingInput}
                />
            </form>
        </div>
    );
};

export default SearchForm;
