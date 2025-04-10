import {Counter} from "../counter/counter";
import {useForm} from "./use-form";

import styles from "./review-form.module.css";
import {Button} from "../button/button.jsx";

export const ReviewForm = () => {
    const {form, setName, setText, setIncrementRating, setDecrementRating, setClear} = useForm();

    const {name, text, rating} = form;

    return (
        <div className={styles.root}>
            <h3 className={styles.title}>Write your review</h3>
            <div className={styles.control}>
                <span>name</span>
                <input className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={styles.control}>
                <span>text</span>
                <input className={styles.input} value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div>
                <span>rating</span>
                <Counter count={rating} increment={setIncrementRating} decrement={setDecrementRating} />
            </div>
            <Button onClick={setClear} className={styles.clearButton}>Clear</Button>
        </div>
    )
}