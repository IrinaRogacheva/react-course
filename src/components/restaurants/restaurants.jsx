import {TabsList} from "../tabs/tabs-list";
import {useState} from "react";
import {ProgressBar} from "../progress-bar/progress-bar";
import {useSelector} from "react-redux";
import {selectRestaurantsIds} from "../../redux/entities/restaurant/slice";
import {RestaurantContainer} from "./restaraunt-container";

export const Restaurants = () => {
    const restaurantsIds = useSelector(selectRestaurantsIds);

    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantsIds[0]);

    return (
        <>
            <ProgressBar />
            <TabsList activeId={activeRestaurantId} onClick={setActiveRestaurantId} />
            {activeRestaurantId && (
                <RestaurantContainer id={activeRestaurantId} />
            )}
        </>
    )
}