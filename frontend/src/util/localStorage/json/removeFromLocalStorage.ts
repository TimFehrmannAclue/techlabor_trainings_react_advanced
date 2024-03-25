/**
 * Use a unique token lo remove data from localStorage
 */
export default function removeFromLocalStorage(token: string): void {
  localStorage.removeItem(token);
}
