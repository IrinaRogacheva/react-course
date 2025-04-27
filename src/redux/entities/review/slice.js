import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getReviews} from "./get-reviews";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
    name: "reviewSlice",
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder.addCase(getReviews.fulfilled, (state, {payload}) => {
            entityAdapter.setMany(state, payload);
        })
    }
})

export const selectReviewSlice = (state) => state.reviewSlice;

export const {selectById: selectReviewById} =
    entityAdapter.getSelectors(selectReviewSlice);