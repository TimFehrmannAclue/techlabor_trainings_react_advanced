export default function addSearchParam(
  route: string,
  searchKey: string,
  searchValue: string,
): string {
  // First searchParam is always '&' but subsequent are '?'
  const separator = route.includes('?') ? '&' : '?';
  return `${route}${separator}${searchKey}=${searchValue}`;
}
