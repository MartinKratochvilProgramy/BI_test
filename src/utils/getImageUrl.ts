export function getImageUrl(name: string) {
    return new URL(`../../public/assets/${name}`, import.meta.url).href
}