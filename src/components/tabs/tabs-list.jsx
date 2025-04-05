import {restaurants} from "../../constants/mock";
import {Tab} from "./tab";

export const TabsList = ({activeId, onClick}) => {
    return (
        <ul style={{display: "flex", gap: "20px"}}>
            {restaurants.map(({id, name}) => (
                <li key={`${id}-tab`}>
                    <Tab id={id} currentId={activeId} name={name} onClick={onClick} />
                </li>
            ))}
        </ul>
    )
}