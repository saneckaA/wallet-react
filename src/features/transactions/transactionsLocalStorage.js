const localStorageKey = "transactions";

export const saveTtransactionsInLocalStorage = transactions => 
localStorage.setItem(localStorageKey, JSON.stringify(transactions));

export const getTransactionsFromLocalStorage = () => 
JSON.parse(localStorage.getItem(localStorageKey)) || [];
