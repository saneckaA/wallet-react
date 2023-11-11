export const THEME_STORAGE_KEY = 'theme';

export const saveThemeInLocalStorage = (theme) => {
    localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme));
};

export const getThemeFromLocalStorage = () => {
    return localStorage.getItem(THEME_STORAGE_KEY);
};