import {Review} from "./review";

export const Reviews = ({reviews}) => {
    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                {reviews.map(({id, text}) => (
                    <li key={id}>
                        <Review text={text}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}