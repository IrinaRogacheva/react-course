import {TabsList} from "../tabs/tabs-list";
import {ProgressBar} from "../progress-bar/progress-bar";
import {Outlet} from "react-router";

export const Restaurants = () => {
    return (
        <>
            <ProgressBar />
            <TabsList />
            <Outlet />
        </>
    )
}