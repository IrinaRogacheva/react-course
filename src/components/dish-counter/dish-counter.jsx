import {useCounter} from "./use-counter";
import {Counter} from "../counter/counter";

export const DishCounter = ({id}) => {
    const {count, increment, decrement}= useCounter(id);

    return (
        <Counter count={count} increment={increment} decrement={decrement} />
    )
}