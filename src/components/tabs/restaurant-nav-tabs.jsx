import {TabLink} from "./tab-link";

import styles from "./restaraunt-nav-tabs.module.css";

export const RestaurantNavTabs = () => {
    return (
        <ul className={styles.root}>
            <li key="menu">
                <TabLink name="Menu" link="menu" />
            </li>
            <li key="reviews">
                <TabLink name="Reviews" link="reviews" />
            </li>
        </ul>
    )
}