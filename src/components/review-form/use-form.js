import {useReducer} from "react";

const DEFAULT_FROM_VALUE = {
    name: "",
    text: "",
    rating: 0
};

const SET_NAME_ACTION = "SET_NAME_ACTION";
const SET_TEXT_ACTION = "SET_TEXT_ACTION";
const SET_INCREMENT_RATING_ACTION = "SET_INCREMENT_RATING_ACTION";
const SET_DECREMENT_RATING_ACTION = "SET_DECREMENT_RATING_ACTION";
const SET_CLEAR_ACTION = "SET_CLEAR_ACTION";

const MIN = 0;
const MAX = 5;

const reducer = (state, {type, payload}) => {
    switch (type) {
        case SET_NAME_ACTION:
            return {...DEFAULT_FROM_VALUE, name: payload};
        case SET_TEXT_ACTION:
            return {...state, text: payload};
        case SET_INCREMENT_RATING_ACTION:
            if (state.rating < MAX) {
                return { ...state, rating: state.rating + 1 };
            }
            return state;
        case SET_DECREMENT_RATING_ACTION:
            if (state.rating > MIN) {
                return { ...state, rating: state.rating - 1 };
            }
            return state;
        case SET_CLEAR_ACTION:
            return {...DEFAULT_FROM_VALUE};
        default:
            return state;
    }
}

export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_FROM_VALUE);

    const setName = (name) => dispatch({type: SET_NAME_ACTION, payload: name});
    const setText = (text) => dispatch({type: SET_TEXT_ACTION, payload: text});
    const setIncrementRating = () => dispatch({type: SET_INCREMENT_RATING_ACTION});
    const setDecrementRating = () => dispatch({type: SET_DECREMENT_RATING_ACTION});
    const setClear = () => dispatch({type: SET_CLEAR_ACTION});

    return {
        form,
        setName,
        setText,
        setIncrementRating,
        setDecrementRating,
        setClear,
    };
};