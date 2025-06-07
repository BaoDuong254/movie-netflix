import ImageComponent from "@components/Image";
import React from "react";
import { Link } from "react-router-dom";

const ActorInfo = ({ id, name, character, profile_path, episode_count }) => {
    return (
        <Link
            to={`/people/${id}`}
            className="rounded-lg border border-slate-300 bg-black shadow-sm duration-300 ease-in-out hover:-translate-y-1"
        >
            <ImageComponent
                src={
                    profile_path &&
                    `https://image.tmdb.org/t/p/w276_and_h350_face${profile_path}`
                }
                alt={`${name} as ${character}, id: ${id}`}
                className="rounded-lg"
                width={276}
                height={350}
            />
            <div className="p-3">
                <p className="font-bold max-sm:text-[3vw]">{name}</p>
                <p className="max-sm:text-[2vw]">{character}</p>
                {episode_count && (
                    <p className="max-sm:text-[2vw]">
                        {episode_count} Episodes
                    </p>
                )}
            </div>
        </Link>
    );
};

export default ActorInfo;
