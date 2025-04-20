import {Outlet} from "react-router";
import {RestaurantNavTabs} from "../tabs/restaurant-nav-tabs";

import styles from "./restaraunt.module.css";

export const Restaurant = ({name}) => {
    return (
        <>
            <h2 className={styles.name}>{name}</h2>
            <RestaurantNavTabs />
            <Outlet />
        </>
    )
}