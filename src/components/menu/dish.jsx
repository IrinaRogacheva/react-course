import {DishCounter} from "../dish-counter/dish-counter";

export const Dish = ({name}) => {
    return (
        <>
            <p>{name}</p>
            <DishCounter />
        </>
    )
}