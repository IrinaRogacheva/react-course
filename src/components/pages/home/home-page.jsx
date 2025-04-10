import {Restaurants} from "../../restaurants/restaurants";
import {PageTitle} from "../../page-title/page-title";

export const HomePage = () => {
    return (
        <>
            <PageTitle>Restaurants</PageTitle>
            <Restaurants />
        </>
    )
}