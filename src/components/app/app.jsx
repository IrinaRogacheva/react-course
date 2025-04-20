import {Layout} from "../layout/layout";
import {HomePage} from "../pages/home/home-page";
import {ThemeContext} from "../theme-context/theme-context";
import {UserContext} from "../user-context/user-context";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

import "./app.css";

export const App = () => {
    return (
        <Provider store={store}>
            <UserContext>
                <ThemeContext>
                    <Layout>
                        <HomePage />
                    </Layout>
                </ThemeContext>
            </UserContext>
        </Provider>
    )
}