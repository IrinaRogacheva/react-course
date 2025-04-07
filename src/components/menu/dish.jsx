import {Counter} from "../counter/counter";

export const Dish = ({name}) => {
    return (
        <>
            <p>{name}</p>
            <Counter />
        </>
    )
}