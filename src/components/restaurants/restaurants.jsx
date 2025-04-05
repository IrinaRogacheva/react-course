import {restaurants} from "../../constants/mock";
import {Restaurant} from "./restaraunt";
import {TabsList} from "../tabs/tabs-list";
import {useState} from "react";

export const Restaurants = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState(
        restaurants.length > 0 && restaurants[0].id ? restaurants[0].id : null
    );

    return (
        <>
            <TabsList activeId={activeRestaurantId} onClick={setActiveRestaurantId} />
            <ul>
                {restaurants.map(({id, name, menu, reviews}) => (
                    (activeRestaurantId === id) && <li key={id}>
                        <Restaurant name={name} menu={menu} reviews={reviews} />
                    </li>
                ))}
            </ul>
        </>
    )
}