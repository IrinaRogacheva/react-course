import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurant/slice";
import {TabLink} from "./tab-link";

export const RestaurantTabContainer = ({id}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    const {name} = restaurant;

    return (
        <TabLink name={name} link={id} />
    )
}