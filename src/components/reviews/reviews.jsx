import {ReviewContainer} from "./review-container";

import styles from "./reviews.module.css";

export const Reviews = ({reviewsIds}) => {
    return (
        <div className={styles.root}>
            <h3 className={styles.title}>Reviews</h3>
            <ul className={styles.list}>
                {reviewsIds.map((id) => (
                    <li key={id}>
                        <ReviewContainer id={id} />
                    </li>
                ))}
            </ul>
        </div>
    )
}