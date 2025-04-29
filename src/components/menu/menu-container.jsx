import {Menu} from "./menu";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurant/slice";

export const MenuContainer = ({restaurantId}) => {
    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    );

    if (!restaurant) {
        return null;
    }

    const { menu } = restaurant;

    if (!menu.length) {
        return null;
    }

    return <Menu menuIds={menu} />;
}