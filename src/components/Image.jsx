import React, { useEffect, useState } from "react";

const ImageComponent = ({ src, alt, width, height, className }) => {
    const [currentSrc, setCurrentSrc] = useState(
        `https://placehold.co/${width}x${height}?text=Loading`
    );

    useEffect(() => {
        const img = new Image();
        if (src) {
            img.src = src;

            img.onload = () => {
                setCurrentSrc(src);
            };

            img.onerror = () => {
                setCurrentSrc(
                    `https://placehold.co/${width}x${height}?text=Error`
                );
            };
            return;
        }

        setCurrentSrc(`https://placehold.co/${width}x${height}?text=No Image`);

        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [src, width, height]);

    return (
        <img
            src={currentSrc}
            alt={alt}
            width={width}
            height={height}
            className={currentSrc === src ? className : `${className} blur-md`}
        />
    );
};

export default ImageComponent;
