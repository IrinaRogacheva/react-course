import styles from "./card.module.css";

export const Card = ({title, children}) => {
    return (
        <div className={styles.root}>
            <p className={styles.title}>{title}</p>
            {children}
        </div>
    )
}