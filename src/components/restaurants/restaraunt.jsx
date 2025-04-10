import {Reviews} from "../reviews/reviews";
import {Menu} from "../menu/menu";
import {ReviewForm} from "../review-form/review-form";
import {use} from "react";
import {UserContext} from "../user-context/index";

import styles from "./restaraunt.module.css";

export const Restaurant = ({name, menu, reviews}) => {
    const { user } = use(UserContext);

    return (
        <>
            <h2 className={styles.name}>{name}</h2>
            {menu.length ? <Menu menu={menu}/> : null}
            {reviews.length ? <Reviews reviews={reviews}/> : null}
            {user &&
                <ReviewForm />
            }
        </>
    )
}