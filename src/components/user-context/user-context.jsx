import { useState } from "react";
import { UserContext as UserContextProvider } from ".";

export const UserContext = ({ children }) => {
    const [user, setUser] = useState("");

    const login = () => {
        setUser("mock user");
    };

    const logout = () => {
        setUser("");
    };

    return (
        <UserContextProvider value={{ user, login, logout }}>
            {children}
        </UserContextProvider>
    );
};