import {ToggleTheme} from "../toggle-theme/toggle-theme";

import styles from "./header.module.css";

export const Header = () => {
    return (
        <header className={styles.root}>
            <ToggleTheme />
        </header>
    )
}