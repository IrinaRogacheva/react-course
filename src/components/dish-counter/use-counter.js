import {useState} from "react";

const MIN = 0;
const MAX = 5;

export const useCounter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < MAX) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > MIN) {
            setCount(count - 1);
        }
    };

    return {
        count,
        increment,
        decrement,
    };
};