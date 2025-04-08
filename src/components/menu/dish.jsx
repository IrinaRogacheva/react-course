import {DishCounter} from "../dish-counter/dish-counter";
import {Card} from "../card/card";

export const Dish = ({name}) => {
    return (
        <Card title={name}>
            <DishCounter />
        </Card>
    )
}