import useFetch from "@hooks/useFetch";
import React, { useEffect } from "react";
import { useWatch } from "react-hook-form";

const GenresInput = ({ control, onChange, value = [] }) => {
    const mediaType = useWatch({ name: "mediaType", control });

    const { data } = useFetch(
        {
            url: `/genre/${mediaType}/list`,
        },
        { enabled: !!mediaType }
    );

    useEffect(() => {
        onChange([]);
    }, [mediaType, onChange]);

    return (
        <div className="flex flex-wrap gap-1">
            {(data?.genres || []).map((genre) => {
                return (
                    <p
                        key={genre.id}
                        className={`cursor-pointer rounded-lg border px-2 py-1 ${value.includes(genre.id) ? "bg-black text-white" : ""}`}
                        onClick={() => {
                            if (value.includes(genre.id)) {
                                onChange(value.filter((id) => id !== genre.id));
                                return;
                            }
                            onChange([...value, genre.id]);
                        }}
                    >
                        {genre.name}
                    </p>
                );
            })}
        </div>
    );
};

export default GenresInput;
