import {useSelector} from "react-redux";
import {selectRestaurantsIds} from "../../redux/entities/restaurant/slice";
import {TabContainer} from "./tab-container";

import styles from "./tabs-list.module.css";

export const TabsList = ({activeId, onClick}) => {
    const restaurantsIds = useSelector(selectRestaurantsIds);

    return (
        <ul className={styles.root}>
            {restaurantsIds.map((id) => (
                <li key={id}>
                    <TabContainer id={id} currentId={activeId} onClick={onClick} />
                </li>
            ))}
        </ul>
    )
}