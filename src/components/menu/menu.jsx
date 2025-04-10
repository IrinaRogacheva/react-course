import {Dish} from "./dish";

import styles from "./menu.module.css";

export const Menu = ({menu}) => {
    return (
        <div>
            <h3 className={styles.title}>Menu</h3>
            <ul className={styles.root}>
                {menu.map(({id, name}) => (
                    <li key={id}>
                        <Dish name={name} />
                    </li>
                ))}
            </ul>
        </div>
    )
}