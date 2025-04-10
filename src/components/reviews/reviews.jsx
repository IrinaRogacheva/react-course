import {Review} from "./review";

import styles from "./reviews.module.css";

export const Reviews = ({reviews}) => {
    return (
        <div className={styles.root}>
            <h3 className={styles.title}>Reviews</h3>
            <ul className={styles.list}>
                {reviews.map(({id, text, user}) => (
                    <li key={id}>
                        <Review text={text} user={user}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}