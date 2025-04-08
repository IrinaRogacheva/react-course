import {useEffect, useState} from "react";

export const useProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            setProgress(
                Math.floor(
                    (window.scrollY /
                        (document.documentElement.scrollHeight - window.innerHeight)) *
                    100
                )
            );
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return {
        progress
    };
};