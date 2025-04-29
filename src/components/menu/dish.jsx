import {DishCounter} from "../dish-counter/dish-counter";
import {Card} from "../card/card";
import {use} from "react";
import {UserContext} from "../user-context";

export const Dish = ({id, name}) => {
    const { user } = use(UserContext);

    return (
        <Card title={name} link={`/dish/${id}`}>
            {user &&
                <DishCounter id={id}/>
            }
        </Card>
    )
}