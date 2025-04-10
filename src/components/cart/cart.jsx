import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/slice";
import {CartItemContainer} from "./cart-item-container";

export const Cart = () => {
    const items = useSelector(selectCartItems);

    if (!items.length) {
        return null;
    }

    return (
        <ul>
            {items.map(({ id, amount }) => (
                <li key={id}>
                    <CartItemContainer id={id} amount={amount} />
                </li>
            ))}
        </ul>
    );
};