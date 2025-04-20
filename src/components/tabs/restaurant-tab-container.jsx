import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurant/slice";
import {Tab} from "./tab";

export const RestaurantTabContainer = ({id, currentId, onClick}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    const {name} = restaurant;

    return (
        <Tab id={id} currentId={currentId} name={name} onClick={onClick} />
    )
}