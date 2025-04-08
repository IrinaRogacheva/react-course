import {Header} from "../header/header";
import {Footer} from "../footer/footer";

import styles from "./layout.module.css";

export const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <section className={styles.root}>{children}</section>
            <Footer />
        </div>
    )
}