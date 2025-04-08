import {restaurants} from "../../constants/mock";
import {Tab} from "./tab";

import styles from "./tabs-list.module.css";

export const TabsList = ({activeId, onClick}) => {
    return (
        <ul className={styles.root}>
            {restaurants.map(({id, name}) => (
                <li key={id}>
                    <Tab id={id} currentId={activeId} name={name} onClick={onClick} />
                </li>
            ))}
        </ul>
    )
}