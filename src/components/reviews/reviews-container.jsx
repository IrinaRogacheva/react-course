import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurant/slice";
import {Reviews} from "./reviews";

export const ReviewsContainer = ({restaurantId}) => {
    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    );

    if (!restaurant) {
        return null;
    }

    const { reviews } = restaurant;

    if (!reviews.length) {
        return null;
    }

    return <Reviews reviewsIds={reviews} />;
}