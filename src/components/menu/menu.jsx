import {DishContainer} from "./dish-container";

import styles from "./menu.module.css";

export const Menu = ({menuIds}) => {
    return (
        <div>
            <h3 className={styles.title}>Menu</h3>
            <ul className={styles.root}>
                {menuIds.map((id) => (
                    <li key={id}>
                        <DishContainer id={id} />
                    </li>
                ))}
            </ul>
        </div>
    )
}