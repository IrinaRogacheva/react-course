import {Menu} from "./menu";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurant/slice";
import {getDishes} from "../../redux/entities/dish/get-dishes";
import {useRequest} from "../../redux/hooks/use-request";
import {IDLE, PENDING, REJECTED} from "../../redux/consts";

export const MenuContainer = ({restaurantId}) => {
    const requestStatus = useRequest(getDishes, restaurantId);
    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    );

    if (!restaurant) {
        return null;
    }

    if (requestStatus === IDLE || requestStatus === PENDING) {
        return 'loading...';
    }

    if (requestStatus === REJECTED) {
        return 'error';
    }

    const { menu } = restaurant;

    if (!menu.length) {
        return null;
    }

    return <Menu menuIds={menu} />;
}