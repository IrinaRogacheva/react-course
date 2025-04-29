import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurant/slice";
import {Reviews} from "./reviews";
import {useRequest} from "../../redux/hooks/use-request";
import {getReviews} from "../../redux/entities/review/get-reviews";
import {getUsers} from "../../redux/entities/user/get-users";
import {PENDING, REJECTED} from "../../redux/consts";

export const ReviewsContainer = ({restaurantId}) => {
    const reviewsRequestStatus = useRequest(getReviews, restaurantId);
    const usersRequestStatus = useRequest(getUsers);

    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    );

    if (!restaurant) {
        return null;
    }

    if (reviewsRequestStatus === PENDING || usersRequestStatus === PENDING) {
        return 'loading...';
    }

    if (reviewsRequestStatus === REJECTED || usersRequestStatus === REJECTED) {
        return 'error';
    }

    const { reviews } = restaurant;

    if (!reviews.length) {
        return null;
    }

    return <Reviews reviewsIds={reviews} />;
}