import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getUsers} from "./get-users";

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
    name: "userSlice",
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, {payload}) => {
            entityAdapter.setAll(state, payload);
        });
    },
})

export const selectUserSlice = (state) => state.userSlice;

export const {selectById: selectUserById, selectTotal: selectUsersTotal} =
    entityAdapter.getSelectors(selectUserSlice);