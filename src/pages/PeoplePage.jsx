import ImageComponent from "@components/Image";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import { GENRDER_MAPPING } from "@lib/constants";
import React from "react";
import { useLoaderData } from "react-router-dom";

const PeoplePage = () => {
    const peopleInfo = useLoaderData();

    return (
        <div className="bg-black text-[1.2vw] text-white">
            <div className="container">
                <div className="flex-1">
                    <ImageComponent
                        src={
                            peopleInfo.profile_path &&
                            `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${peopleInfo.profile_path}`
                        }
                        alt={peopleInfo.name}
                        width={600}
                        height={900}
                        className="mb-6"
                    />
                    <div>
                        <p className="mb-6 text-[1.3vw] text-lg font-bold max-sm:text-[4vw]">
                            Personal Info
                        </p>
                        <div className="space-y-4">
                            <div>
                                <p className="font-bold max-sm:text-[4vw]">
                                    Known for
                                </p>
                                <p className="max-sm:text-[3vw]">
                                    {peopleInfo.known_for_department}{" "}
                                </p>
                            </div>
                            <div>
                                <p className="font-bold max-sm:text-[4vw]">
                                    Gender
                                </p>
                                <p className="max-sm:text-[3vw]">
                                    {GENRDER_MAPPING[peopleInfo.gender]}
                                </p>
                            </div>
                            <div>
                                <p className="font-bold max-sm:text-[4vw]">
                                    Place of birth
                                </p>
                                <p className="max-sm:text-[3vw]">
                                    {peopleInfo.place_of_birth}
                                </p>
                            </div>
                            <div>
                                <p className="font-bold max-sm:text-[4vw]">
                                    Birthday
                                </p>
                                <p className="max-sm:text-[3vw]">
                                    {peopleInfo.birthday}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-[2]">
                    <p className="mb-6 text-[1.5vw] font-bold max-sm:text-[5vw]">
                        {peopleInfo.name}
                    </p>
                    <div className="mb-6">
                        <p className="mb-4 text-[1.4vw] font-bold max-sm:text-[4vw]">
                            Biography
                        </p>
                        <p className="whitespace-pre-line max-sm:text-[3vw]">
                            {peopleInfo.biography || "No biography available."}
                        </p>
                    </div>
                    <RelatedMediaList
                        mediaList={peopleInfo.combined_credits?.cast || []}
                        title={"Known for"}
                    />
                </div>
            </div>
        </div>
    );
};

export default PeoplePage;
