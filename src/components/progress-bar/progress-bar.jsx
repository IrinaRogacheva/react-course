import {useProgress} from "./use-progress";

export const ProgressBar = () => {
    const {progress} = useProgress();

    return (
        <div
            style={{
                backgroundColor: "green",
                width: `${progress}%`,
                height: "3px",
                position: "fixed",
                top: 0,
                left: 0
            }}
        />
    );
};