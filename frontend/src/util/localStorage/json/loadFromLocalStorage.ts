/**
 * Use a unique token lo load json data from LocalStorage & return it as give Type
 * If no data was stored, the default will be returned
 */
export default function loadFromLocalStorage<Type>(token: string, defaultObj: Type): Type {
  const json = localStorage.getItem(token);
  if (!json || json === '' || json === undefined) {
    return defaultObj;
  }

  return JSON.parse(json);
}
