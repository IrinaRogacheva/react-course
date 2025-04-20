import {useParams} from "react-router";
import {MenuContainer} from "../components/menu/menu-container";

export const RestaurantMenuPage = () => {
    const {restaurantId} = useParams();

    return (
        <>
            <MenuContainer restaurantId={restaurantId} />
        </>
    )
}