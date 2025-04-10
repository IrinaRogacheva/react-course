import classNames from "classnames";

import styles from "./tab.module.css";

export const Tab = ({id, currentId, name, onClick}) => {
    return (
        <button
            onClick={() => {
                if (id !== currentId) {
                    onClick(id)
                }
            }}
            className={classNames(styles.root, {
                [styles.active]: currentId === id,
            })}
        >
            {name}
        </button>
    )
}