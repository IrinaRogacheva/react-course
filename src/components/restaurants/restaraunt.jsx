import {Reviews} from "../reviews/reviews";
import {Menu} from "../menu/menu";
import {ReviewForm} from "../review-form/review-form";
import {use} from "react";
import {UserContext} from "../user-context/index";

import styles from "./restaraunt.module.css";

export const Restaurant = ({name, menuIds, reviewsIds}) => {
    const { user } = use(UserContext);

    return (
        <>
            <h2 className={styles.name}>{name}</h2>
            {menuIds.length ? <Menu menuIds={menuIds}/> : null}
            {reviewsIds.length ? <Reviews reviewsIds={reviewsIds}/> : null}
            {user &&
                <ReviewForm />
            }
        </>
    )
}