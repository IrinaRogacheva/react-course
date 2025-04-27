import {useSelector} from "react-redux";
import {selectReviewById} from "../../redux/entities/review/slice";
import {Review} from "./review";
import {selectUserById} from "../../redux/entities/user/slice";
import {useRequest} from "../../redux/hooks/use-request";
import {getReviews} from "../../redux/entities/review/get-reviews";
import {getUsers} from "../../redux/entities/user/get-users";
import {PENDING, REJECTED} from "../../redux/consts";

export const ReviewContainer = ({id}) => {
    const reviewsRequestStatus = useRequest(getReviews, id);
    const usersRequestStatus = useRequest(getUsers);

    const review = useSelector((state) => selectReviewById(state, id));
    const user = useSelector((state) => selectUserById(state, review?.userId));

    if (!review) {
        return null;
    }

    if (reviewsRequestStatus === PENDING || usersRequestStatus === PENDING) {
        return 'loading...';
    }

    if (reviewsRequestStatus === REJECTED || usersRequestStatus === REJECTED) {
        return 'error';
    }

    const {text} = review;
    const {name} = user;

    return <Review text={text} user={name} />
}