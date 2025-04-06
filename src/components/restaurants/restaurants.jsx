import {restaurants} from "../../constants/mock";
import {Restaurant} from "./restaraunt";
import {TabsList} from "../tabs/tabs-list";
import {useState} from "react";

export const Restaurants = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState(
        restaurants.length > 0 && restaurants[0].id ? restaurants[0].id : null
    );

    const activeRestaurant = restaurants.find(({id}) => id === activeRestaurantId);

    return (
        <>
            <TabsList activeId={activeRestaurantId} onClick={setActiveRestaurantId} />
            {activeRestaurant && (
                <Restaurant
                    name={activeRestaurant.name}
                    menu={activeRestaurant.menu}
                    reviews={activeRestaurant.reviews}
                />
            )}
        </>
    )
}