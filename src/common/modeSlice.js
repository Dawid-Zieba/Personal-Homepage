import { createSlice } from "@reduxjs/toolkit";
import { getModeFromLocalStorage } from "./modeLocalStorage";

const modeSlice = createSlice({
    name: "mode",
    initialState: {
        isDarkMode: getModeFromLocalStorage(),
    },
    reducers: {
        toggleMode: state => {
            state.isDarkMode = !state.isDarkMode;
        },
    },
});

export const { toggleMode } = modeSlice.actions;

export const selectModeState = state => state.mode;

export const selectIsDarkMode = state => selectModeState(state).isDarkMode;

export default modeSlice.reducer;