import {Card} from "../card/card";

export const Review = ({text, user}) => {
    return <Card title={user}>
        {text}
    </Card>
}