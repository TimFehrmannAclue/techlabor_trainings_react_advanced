/**
 * Use a unique token lo save data as json to localStorage
 */
export default function saveToLocalStorage(token: string, tabsState: object): void {
  const json = JSON.stringify(tabsState);
  localStorage.setItem(token, json);
}
