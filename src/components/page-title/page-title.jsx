import styles from "./page-title.module.css";

export const PageTitle = ({children}) => {
    return (
        <h1 className={styles.root}>{children}</h1>
    )
}