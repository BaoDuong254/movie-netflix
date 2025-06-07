import ImageComponent from "@components/Image";
import React from "react";

const TVInfo = ({ tvInfo = [] }) => {
    return (
        <div>
            <p className="mb-4 text-[1.4vw] font-bold max-sm:text-[5vw]">
                Information
            </p>
            <div className="mb-4">
                <p className="font-bold max-sm:text-[4vw]">Original Name</p>
                <p className="max-sm:text-[3vw]">{tvInfo.original_name}</p>
            </div>
            <div className="mb-4">
                <p className="font-bold max-sm:text-[4vw]">Original Country</p>
                {(tvInfo.origin_country || []).map((countryCode) => {
                    return (
                        <ImageComponent
                            src={
                                countryCode.toLowerCase() &&
                                `https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`
                            }
                            alt="Country Flag"
                            key={countryCode}
                            className="mr-1 mt-1 w-[1.4vw] max-sm:w-[3vw]"
                            width={48}
                            height={36}
                        />
                    );
                })}
            </div>
            <div className="mb-4">
                <p className="font-bold max-sm:text-[4vw]">Status</p>
                <p className="max-sm:text-[3vw]">{tvInfo.status}</p>
            </div>
            <div className="mb-4">
                <p className="font-bold max-sm:text-[4vw]">Network</p>
                {(tvInfo.networks || []).map((network) => {
                    return (
                        <div
                            key={network.id}
                            className="mb-1 flex items-center"
                        >
                            <ImageComponent
                                src={
                                    network.logo_path &&
                                    `https://image.tmdb.org/t/p/h30${network.logo_path}`
                                }
                                alt={`${network.name} Logo`}
                                className="mr-2 invert"
                                width={48}
                                height={36}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TVInfo;
