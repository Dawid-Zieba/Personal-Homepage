const localStorageKey = "mode";

export const saveModeInLocalStorage = mode => 
localStorage.setItem(localStorageKey, JSON.stringify(mode));

export const getModeFromLocalStorage = () => 
JSON.parse(localStorage.getItem(localStorageKey));