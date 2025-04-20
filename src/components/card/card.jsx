import {Link} from "react-router";

import styles from "./card.module.css";

export const Card = ({title, children, link}) => {
    const titleContent = <p className={styles.title}>{title}</p>;

    return (
        <div className={styles.root}>
            {link ? <Link to={link}>{titleContent}</Link> : titleContent}
            {children}
        </div>
    )
}