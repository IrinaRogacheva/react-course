import {DishCounter} from "../dish-counter/dish-counter";

export const CartItem = ({id, name, amount}) => {
    return (
        <div>
            {name} - {amount}
            <DishCounter id={id}/>
        </div>
    )
};