import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MediaList = ({ title, tabs }) => {
    const [mediaList, setMediaList] = useState([]);
    const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);

    useEffect(() => {
        const url = tabs.find((tab) => tab.id === activeTabId)?.url;
        if (!url) return;
        fetch(url, {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWU2NjdlNThjOTI0YjIyYmM1ZTliYzc2ODNhMDU1OCIsIm5iZiI6MTc0ODUyNDQ0OS44OTY5OTk4LCJzdWIiOiI2ODM4NWRhMWY2YzhkNDQ4M2IyYjg2NDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cfT4egj48nxjEborzkstwfXzFwKVbcaPBWEaLo-cHUY",
            },
        }).then(async (res) => {
            const data = await res.json();
            const trendingMediaList = data.results.slice(0, 12);
            setMediaList(trendingMediaList);
        });
    }, [activeTabId, tabs]);

    return (
        <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
            <div className="mb-6 flex items-center gap-4">
                <p className="text-[2vw] font-bold">{title}</p>
                <ul className="flex rounded border border-white">
                    {tabs.map((tab) => (
                        <li
                            key={tab.id}
                            className={`cursor-pointer rounded px-2 py-1 ${
                                activeTabId === tab.id
                                    ? "bg-white text-black"
                                    : ""
                            }`}
                            onClick={() => setActiveTabId(tab.id)}
                        >
                            {tab.label}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-6">
                {mediaList.map((media) => (
                    <MovieCard
                        key={media.id}
                        title={media.title || media.name}
                        release_date={
                            media.release_date || media.first_air_date
                        }
                        poster={media.poster_path}
                        point={media.vote_average}
                        mediaType={media.media_type || activeTabId}
                    />
                ))}
            </div>
        </div>
    );
};

export default MediaList;
