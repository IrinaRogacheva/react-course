import {useSelector} from "react-redux";
import {selectRestaurantsIds} from "../../redux/entities/restaurant/slice";
import {RestaurantTabContainer} from "./restaurant-tab-container.jsx";

import styles from "./tabs-list.module.css";

export const TabsList = () => {
    const restaurantsIds = useSelector(selectRestaurantsIds);

    return (
        <ul className={styles.root}>
            {restaurantsIds.map((id) => (
                <li key={id}>
                    <RestaurantTabContainer id={id} />
                </li>
            ))}
        </ul>
    )
}