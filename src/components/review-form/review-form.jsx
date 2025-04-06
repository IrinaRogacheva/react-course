import {Counter} from "../counter/counter";
import {useForm} from "./use-form";

export const ReviewForm = () => {
    const {form, setName, setText, setIncrementRating, setDecrementRating, setClear} = useForm();

    const {name, text, rating} = form;

    return (
        <div>
            <h3>Write your review</h3>
            <div>
                <span>name</span>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <span>text</span>
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div>
                <span>rating</span>
                <Counter count={rating} increment={setIncrementRating} decrement={setDecrementRating} />
            </div>
            <button onClick={setClear}>Clear</button>
        </div>
    )
}