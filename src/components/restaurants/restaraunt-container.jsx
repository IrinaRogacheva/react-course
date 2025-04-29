import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurant/slice";
import {Restaurant} from "./restaraunt";
import {useRequest} from "../../redux/hooks/use-request";
import {getRestaurant} from "../../redux/entities/restaurant/get-restaurant";
import {PENDING, REJECTED} from "../../redux/consts";

export const RestaurantContainer = ({id}) => {
    const requestStatus = useRequest(getRestaurant, id);
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    if (requestStatus === PENDING) {
        return 'loading...';
    }

    if (requestStatus === REJECTED) {
        return 'error';
    }

    const {name} = restaurant;

    return <Restaurant name={name} />
}