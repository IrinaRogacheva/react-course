import {restaurants} from "../../constants/mock";
import {Restaurant} from "./restaraunt";
import {TabsList} from "../tabs/tabs-list";
import {useState} from "react";
import {ProgressBar} from "../progress-bar/progress-bar";

export const Restaurants = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState(
        restaurants.length > 0 && restaurants[0].id ? restaurants[0].id : null
    );

    const activeRestaurant = restaurants.find(({id}) => id === activeRestaurantId);

    return (
        <>
            <ProgressBar />
            <TabsList activeId={activeRestaurantId} onClick={setActiveRestaurantId} />
            {activeRestaurant && (
                <Restaurant
                    name={activeRestaurant.name}
                    menu={activeRestaurant.menu}
                    reviews={activeRestaurant.reviews}
                />
            )}
            {activeRestaurant && (
                <Restaurant
                    name={activeRestaurant.name}
                    menu={activeRestaurant.menu}
                    reviews={activeRestaurant.reviews}
                />
            )}
            {activeRestaurant && (
                <Restaurant
                    name={activeRestaurant.name}
                    menu={activeRestaurant.menu}
                    reviews={activeRestaurant.reviews}
                />
            )}
            {activeRestaurant && (
                <Restaurant
                    name={activeRestaurant.name}
                    menu={activeRestaurant.menu}
                    reviews={activeRestaurant.reviews}
                />
            )}
            {activeRestaurant && (
                <Restaurant
                    name={activeRestaurant.name}
                    menu={activeRestaurant.menu}
                    reviews={activeRestaurant.reviews}
                />
            )}
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