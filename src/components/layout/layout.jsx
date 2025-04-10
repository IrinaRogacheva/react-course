import {Header} from "../header/header";
import {Footer} from "../footer/footer";
import {use} from "react";
import {ThemeContext} from "../theme-context/index";
import classNames from "classnames";
import { Cart } from "../cart/cart";

import styles from "./layout.module.css";
import {Outlet} from "react-router";

export const Layout = () => {
    const {theme} = use(ThemeContext);

    return (
        <div className={classNames(styles.root, {
            [styles.dark]: theme === "dark",
        })}>
            <Header />
            <section className={styles.main}><Outlet/></section>
            <Cart />
            <Footer />
        </div>
    )
}