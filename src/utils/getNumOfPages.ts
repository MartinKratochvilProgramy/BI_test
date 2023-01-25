export function getNumOfPages (numOfItems: number, itemsPerPage: number): number {
  let wholePages = Math.floor(numOfItems / itemsPerPage)
  if (numOfItems % itemsPerPage > 0) wholePages++

  return wholePages
}
