const localStorageKey = "transactions";

export const saveTtransactionsInLocalStorage = transactions => 
localStorage.setItem(localStorageKey, JSON.stringify(transactions));

export const getTransactionsFromLocalStorage = () => 
JSON.parse(localStorage.getItem(localStorageKey)) || [];


export const saveThemeInLocalStorage = theme => 
localStorage.setItem("theme", JSON.stringify(theme));

export const getThemeFromLocalStorage = () =>
JSON.parse(localStorage.getItem("theme")) || [];