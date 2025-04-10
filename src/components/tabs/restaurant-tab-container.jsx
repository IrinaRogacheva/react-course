import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurant/slice";
import {Tab} from "./tab";
import {NavLink} from "react-router";

export const RestaurantTabContainer = ({id}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    if (!restaurant) {
        return null;
    }

    const {name} = restaurant;

    return (
        <NavLink to={id}>
            {({ isActive }) => (
                <Tab name={name} isActive={isActive} />
            )}
        </NavLink>
    )
}