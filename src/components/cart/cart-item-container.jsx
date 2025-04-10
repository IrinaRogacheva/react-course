import { useSelector } from "react-redux";
import {selectDishById} from "../../redux/entities/dish/slice";
import {CartItem} from "./cart-item";

export const CartItemContainer = ({id, amount}) => {
    const dish = useSelector((state) => selectDishById(state, id));

    const {name} = dish;

    return (
        <CartItem id={id} name={name} amount={amount}/>
    )
};