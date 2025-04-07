import {Dish} from "./dish";

export const Menu = ({menu}) => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {menu.map(({id, name}) => (
                    <li key={id}>
                        <Dish name={name} />
                    </li>
                ))}
            </ul>
        </div>
    )
}