import React from "react";
import ActorInfo from "./ActorInfo";

const ActorList = ({ actors = [] }) => {
    const [isShowMore, setIsShowMore] = React.useState(false);

    const currentActors = isShowMore ? actors.slice(0, 32) : actors.slice(0, 4);

    return (
        <div>
            <p className="mb-4 text-[1.4vw] font-bold max-sm:text-[5vw]">
                Actors
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {currentActors.map((actor) => (
                    <ActorInfo
                        key={actor.id}
                        id={actor.id}
                        name={actor.name}
                        character={actor.character}
                        profile_path={actor.profile_path}
                        episode_count={actor.episode_count}
                    />
                ))}
            </div>
            <p
                className="mt-1 cursor-pointer max-sm:mt-3 max-sm:text-[3vw]"
                onClick={() => {
                    setIsShowMore(!isShowMore);
                }}
            >
                {isShowMore ? "Show Less" : "Show More"}
            </p>
        </div>
    );
};

export default ActorList;
