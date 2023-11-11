import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

const storedTheme = getThemeFromLocalStorage();
console.log('Stored Theme:', storedTheme);
const initialState = {
    isDarkThemeEnabled: storedTheme ? storedTheme : false,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDarkThemeEnabled = !state.isDarkThemeEnabled
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
const selectThemeState = state => state.theme;

export const selectIsDark = state => selectThemeState(state).isDarkThemeEnabled;

export default themeSlice.reducer;

