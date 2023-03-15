import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        value : null,
    },

    reducers: {
        singnin : (state,action) => {
            state.value =action.payload
        },
        singnout : (state) => {
            state.value =null;
        },

    },
});

export const { singnin, singnout } = userSlice.actions;

export const selectUser = (state) => state.user.value;

export default userSlice.reducer;