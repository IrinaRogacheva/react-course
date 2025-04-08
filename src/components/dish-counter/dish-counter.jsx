import {useCounter} from "./use-counter";
import {Counter} from "../counter/counter";

export const DishCounter = () => {
    const {count, increment, decrement}= useCounter();

    return (
        <Counter count={count} increment={increment} decrement={decrement} />
    )
}