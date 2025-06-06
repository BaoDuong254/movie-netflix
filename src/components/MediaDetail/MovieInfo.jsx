import ImageComponent from "@components/Image";
import { currencyFormatter } from "@lib/utils";
import React from "react";

const MovieInfo = ({ movieInfo = [] }) => {
    return (
        <div>
            <p className="mb-4 text-[1.4vw] font-bold">Information</p>
            <div className="mb-4">
                <p className="font-bold">Original Name</p>
                <p>{movieInfo.original_title}</p>
            </div>
            <div className="mb-4">
                <p className="font-bold">Original Country</p>
                {(movieInfo.origin_country || []).map((countryCode) => {
                    return (
                        <ImageComponent
                            src={
                                countryCode.toLowerCase() &&
                                `https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`
                            }
                            alt="Country Flag"
                            key={countryCode}
                            className="mr-1 mt-1 w-[1.4vw]"
                            width={48}
                            height={36}
                        />
                    );
                })}
            </div>
            <div className="mb-4">
                <p className="font-bold">Status</p>
                <p>{movieInfo.status}</p>
            </div>
            <div className="mb-4">
                <p className="font-bold">Budget</p>
                <p>{currencyFormatter(movieInfo.budget)}</p>
            </div>
            <div className="mb-4">
                <p className="font-bold">Revenue</p>
                <p>{currencyFormatter(movieInfo.revenue)}</p>
            </div>
        </div>
    );
};

export default MovieInfo;
