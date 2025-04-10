import {DishCounter} from "../dish-counter/dish-counter.jsx";

export const CartItem = ({id, name, amount}) => {
    return (
        <div>
            {name} - {amount}
            <DishCounter id={id}/>
        </div>
    )
};