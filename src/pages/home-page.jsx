import {PageTitle} from "../components/page-title/page-title";
import {Button} from "../components/button/button";
import {Link} from "react-router";

export const HomePage = () => {
    return (
        <>
            <PageTitle>Home page</PageTitle>
            <Link to="/restaurants">
                <Button>Restaurants</Button>
            </Link>
        </>
    )
}