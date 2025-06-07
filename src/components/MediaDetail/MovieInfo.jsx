import ImageComponent from "@components/Image";
import { currencyFormatter } from "@lib/utils";
import React from "react";

const MovieInfo = ({ movieInfo = [] }) => {
    return (
        <div>
            <p className="mb-4 text-[1.4vw] font-bold max-sm:text-[5vw]">
                Information
            </p>
            <div className="mb-4">
                <p className="font-bold max-sm:text-[4vw]">Original Name</p>
                <p className="max-sm:text-[3vw]">{movieInfo.original_title}</p>
            </div>
            <div className="mb-4">
                <p className="font-bold max-sm:text-[4vw]">Original Country</p>
                {(movieInfo.origin_country || []).map((countryCode) => {
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
                <p className="max-sm:text-[3vw]">{movieInfo.status}</p>
            </div>
            <div className="mb-4">
                <p className="font-bold max-sm:text-[4vw]">Budget</p>
                <p className="max-sm:text-[3vw]">
                    {currencyFormatter(movieInfo.budget)}
                </p>
            </div>
            <div className="mb-4">
                <p className="font-bold max-sm:text-[4vw]">Revenue</p>
                <p className="max-sm:text-[3vw]">
                    {currencyFormatter(movieInfo.revenue)}
                </p>
            </div>
        </div>
    );
};

export default MovieInfo;
