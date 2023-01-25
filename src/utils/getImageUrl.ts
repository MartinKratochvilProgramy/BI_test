export function getImageUrl (name: string): string {
  return new URL(`../../public/assets/${name}`, import.meta.url).href
}
