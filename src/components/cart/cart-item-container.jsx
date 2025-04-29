import { useSelector } from "react-redux";
import {selectDishById} from "../../redux/entities/dish/slice";
import {CartItem} from "./cart-item";
import {selectAmountByDishId} from "../../redux/entities/cart/slice";

export const CartItemContainer = ({id}) => {
    const dish = useSelector((state) => selectDishById(state, id));
    const amount = useSelector((state) => selectAmountByDishId(state, id));

    const {name} = dish;

    return (
        <CartItem id={id} name={name} amount={amount}/>
    )
};