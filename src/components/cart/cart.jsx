import { useSelector } from "react-redux";
import { selectCartItemsIds } from "../../redux/entities/cart/slice";
import {CartItemContainer} from "./cart-item-container";

export const Cart = () => {
    const itemIds = useSelector(selectCartItemsIds);

    if (!itemIds.length) {
        return null;
    }

    return (
        <ul>
            {itemIds.map((id) => (
                <li key={id}>
                    <CartItemContainer id={id} />
                </li>
            ))}
        </ul>
    );
};