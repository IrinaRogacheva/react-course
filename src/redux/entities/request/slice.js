import { createSlice } from "@reduxjs/toolkit";
import {FULFILLED, IDLE, PENDING, REJECTED} from "../../consts";

export const requestSlice = createSlice({
    name: "requestSlice",
    initialState: {},
    selectors: {
        selectIsLoading: (state, id) => state[id] === PENDING,
        selectRequestStatus: (state, id) => state[id] || IDLE,
    },
    extraReducers: (builder) =>
        builder
            .addMatcher(
                ({ type }) => type.endsWith(PENDING),
                (state, { meta }) => {
                    state[meta.requestId] = PENDING;
                }
            )
            .addMatcher(
                ({ type }) => type.endsWith(REJECTED),
                (state, { meta }) => {
                    state[meta.requestId] = REJECTED;
                }
            )
            .addMatcher(
                ({ type }) => type.endsWith(FULFILLED),
                (state, { meta }) => {
                    state[meta.requestId] = FULFILLED;
                }
            ),
});

export const { selectIsLoading, selectRequestStatus } = requestSlice.selectors;