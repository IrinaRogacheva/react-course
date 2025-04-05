import {Header} from "../header/header";
import {Footer} from "../footer/footer";

export const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <section>{children}</section>
            <Footer />
        </div>
    )
}