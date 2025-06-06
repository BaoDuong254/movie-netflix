import React, { useEffect, useState } from "react";

const DEFAULT_HEADERS = {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
};

const useFetch = (
    { url = "", method = "GET", headers = {} },
    { enabled } = { enabled: true }
) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (enabled === false) {
            return;
        }
        setIsLoading(true);
        fetch(`${import.meta.env.VITE_API_HOST}${url}`, {
            method,
            headers: {
                ...DEFAULT_HEADERS,
                ...headers,
            },
        })
            .then(async (res) => {
                const data = await res.json();
                setData(data);
            })
            .catch((error) => {
                console.error("Error fetching movie details:", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, method, JSON.stringify(headers), enabled]);

    return { data, isLoading };
};

export default useFetch;
