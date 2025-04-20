import {Layout} from "../layout/layout";
import {ThemeContext} from "../theme-context/theme-context";
import {UserContext} from "../user-context/user-context";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import {HomePage} from "../../pages/home-page";
import {RestaurantsPage} from "../../pages/restaurants-page";
import {RestaurantPage} from "../../pages/restaurant-page";
import {RestaurantMenuPage} from "../../pages/restaurant-menu-page";
import {RestaurantReviewsPage} from "../../pages/restaurant-reviews-page";

import "./app.css";
import {DishPage} from "../../pages/dish-page.jsx";

export const App = () => {
    return (
        <Provider store={store}>
            <UserContext>
                <ThemeContext>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<Layout/>}>
                                <Route index element={<HomePage/>}/>
                                <Route path="/restaurants" element={<RestaurantsPage/>}>
                                    <Route path=":restaurantId" element={<RestaurantPage/>}>
                                        <Route index element={<Navigate to="menu" />} />
                                        <Route path="menu" element={<RestaurantMenuPage/>}/>
                                        <Route path="reviews" element={<RestaurantReviewsPage/>}/>
                                    </Route>
                                </Route>
                                <Route path="/dish" element={<DishPage />}>
                                    <Route path=":dishId" element={<DishPage />}/>
                                </Route>
                            </Route>
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </BrowserRouter>
                </ThemeContext>
            </UserContext>
        </Provider>
    )
}