import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurant/slice";
import {Restaurant} from "./restaraunt";

export const RestaurantContainer = ({id}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    const {name, reviews, menu} = restaurant;

    return <Restaurant name={name} reviewsIds={reviews} menuIds={menu} />
}