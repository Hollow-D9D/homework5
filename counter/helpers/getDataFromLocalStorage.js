export function getDataFromLocaleStorage(key) {
    if (localStorage) {
      const value = localStorage.getItem(key);
      // @toDo check value type
      if (value) {
        return JSON.parse(value);
      }
      return false;
    }
}