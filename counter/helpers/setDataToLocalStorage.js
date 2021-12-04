export function setDataToLocaleStorage(key, value) {
      const jsonStr = JSON.stringify(value);
      localStorage.setItem(key, jsonStr);
      return true;
}