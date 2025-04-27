import {useSelector} from "react-redux";
import {selectRestaurantsIds} from "../../redux/entities/restaurant/slice";
import {RestaurantTabContainer} from "./restaurant-tab-container";
import {getRestaurants} from "../../redux/entities/restaurant/get-restaurants";
import {useRequest} from "../../redux/hooks/use-request";
import {PENDING, REJECTED} from "../../redux/consts";

import styles from "./restaraunts-tabs-list.module.css";

export const RestaurantsTabsList = () => {
    const requestStatus = useRequest(getRestaurants);
    const restaurantsIds = useSelector(selectRestaurantsIds);

    if (requestStatus === PENDING) {
        return 'loading...';
    }

    if (requestStatus === REJECTED) {
        return 'error';
    }

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