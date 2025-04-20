import {Tab} from "./tab";
import {NavLink} from "react-router";

export const TabLink = ({name, link}) => {
    return (
        <NavLink to={link}>
            {({ isActive }) => (
                <Tab name={name} isActive={isActive} />
            )}
        </NavLink>
    )
}