import {ToggleTheme} from "../toggle-theme/toggle-theme";
import {UserMenu} from "../user-menu/user-menu";

import styles from "./header.module.css";

export const Header = () => {
    return (
        <header className={styles.root}>
            <ToggleTheme />
            <UserMenu />
        </header>
    )
}