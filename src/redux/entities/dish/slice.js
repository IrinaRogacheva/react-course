import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getDish} from "./get-dish";
import {getDishes} from "./get-dishes";

export const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: "dishSlice",
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder
            .addCase(getDish.fulfilled, (state, { payload }) => {
                entityAdapter.setOne(state, payload);
            })
            .addCase(getDishes.fulfilled, (state, { payload }) => {
                entityAdapter.setMany(state, payload);
            })
});

const selectDishesSlice = (state) => state.dishSlice;

export const { selectById: selectDishById } =
    entityAdapter.getSelectors(selectDishesSlice);