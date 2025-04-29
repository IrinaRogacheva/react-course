import {useSelector} from "react-redux";
import {selectReviewById} from "../../redux/entities/review/slice";
import {Review} from "./review";
import {selectUserById} from "../../redux/entities/user/slice";

export const ReviewContainer = ({id}) => {
    const review = useSelector((state) => selectReviewById(state, id));
    const user = useSelector((state) => selectUserById(state, review?.userId));

    if (!review) {
        return null;
    }

    const {text} = review;
    const {name} = user;

    return <Review text={text} user={name} />
}