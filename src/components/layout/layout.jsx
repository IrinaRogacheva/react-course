import {Header} from "../header/header";
import {Footer} from "../footer/footer";
import {use} from "react";
import {ThemeContext} from "../theme-context/index";
import classNames from "classnames";
import { Cart } from "../cart/cart";

import styles from "./layout.module.css";

export const Layout = ({children}) => {
    const {theme} = use(ThemeContext);

    return (
        <div className={classNames(styles.root, {
            [styles.dark]: theme === "dark",
        })}>
            <Header />
            <section className={styles.main}>{children}</section>
            <Cart />
            <Footer />
        </div>
    )
}