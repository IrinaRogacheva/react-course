import {Reviews} from "../reviews/reviews";
import {Menu} from "../menu/menu";
import {ReviewForm} from "../review-form/review-form";

export const Restaurant = ({name, menu, reviews}) => {
    return (
        <>
            <h2>{name}</h2>
            {menu.length ? <Menu menu={menu}/> : null}
            {reviews.length ? <Reviews reviews={reviews}/> : null}
            <ReviewForm />
        </>
    )
}