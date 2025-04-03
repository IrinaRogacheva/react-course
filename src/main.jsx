import {restaurants} from "../materials/mock";
import {createRoot} from "react-dom/client";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

reactRoot.render(
    <ul>
        {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
                <h2>{restaurant.name}</h2>
                <h3>Меню</h3>
                <ul>
                    {restaurant.menu.map((dish) => (
                        <li key={dish.id}>{dish.name}</li>
                    ))}
                </ul>
                <h3>Отзывы</h3>
                <ul>
                    {restaurant.reviews.map((review) => (
                        <li key={review.id}>{review.text}</li>
                    ))}
                </ul>
            </li>
        ))}
    </ul>
);