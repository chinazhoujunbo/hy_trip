export function getImageUrl(image) {
  return new URL(`../assets/img/${image}`, import.meta.url).href;
}