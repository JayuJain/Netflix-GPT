import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptPage:false,
    },
    reducers: {
        toggleGptPage: (state) => {
            state.showGptPage = !state.showGptPage
        }
    }
})

export const { toggleGptPage } = gptSlice.actions;
export default gptSlice.reducer;