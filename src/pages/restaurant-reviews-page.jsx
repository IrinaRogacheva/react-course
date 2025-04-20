import {useParams} from "react-router";
import {ReviewsContainer} from "../components/reviews/reviews-container";
import {ReviewForm} from "../components/review-form/review-form";
import {use} from "react";
import {UserContext} from "../components/user-context/index";


export const RestaurantReviewsPage = () => {
    const {restaurantId} = useParams();

    const { user } = use(UserContext);

    return (
        <>
            <ReviewsContainer restaurantId={restaurantId} />
            {user &&
                <ReviewForm />
            }
        </>
    )
}