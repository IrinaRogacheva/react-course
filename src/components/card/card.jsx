import {Link} from "react-router";

import styles from "./card.module.css";

export const Card = ({title, link}) => {
    return (
        <div className={styles.root}>
            {link ? (
                <Link className={styles.title} to={link}>
                    {title}
                </Link>
            ) : (
                <p className={styles.title}>{title}</p>
            )}
        </div>
    )
}