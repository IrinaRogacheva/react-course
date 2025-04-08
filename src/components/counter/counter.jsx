import {Button} from "../button/button";

import styles from "./counter.module.css";

export const Counter = ({count, increment, decrement}) => {
    return (
        <div className={styles.root}>
            <p className={styles.count}>{count}</p>
            <div className={styles.buttonsWrapper}>
                <Button className={styles.button} onClick={increment}>+</Button>
                <Button className={styles.button} onClick={decrement}>-</Button>
            </div>
        </div>
    )
}