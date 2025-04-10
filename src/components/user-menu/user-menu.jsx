import {use} from "react";
import {UserContext} from "../user-context";
import {Button} from "../button/button";

export const UserMenu = () => {
    const { user, login, logout } = use(UserContext);

    return (
        <>
            {user && <p>{user}</p>}
            <Button onClick={user ? logout : login}>
                {user ? "logout" : "login"}
            </Button>
        </>
    );
};