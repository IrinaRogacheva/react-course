import classNames from "classnames";
import {use} from "react";
import {ThemeContext} from "../theme-context";

import styles from "./button.module.css";

export const Button = ({
                           children,
                           disabled,
                           onClick,
                           colorViewVariant = "default",
                           className,
                       }) => {
    const { theme } = use(ThemeContext);

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={classNames(styles.button, className, {
                [styles.default]: colorViewVariant === "default",
                [styles.underline]: colorViewVariant === "underline",
                [styles.light]: theme === "light",
                [styles.dark]: theme === "dark",
            })}
        >
            {children}
        </button>
    );
};