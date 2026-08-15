/**
 * Utility helper to prepend Astro's BASE_URL to internal paths and image URLs,
 * and URL-encode spaces/special characters for strict web servers like GitHub Pages.
 */
export function withBase(path: string): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('//') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('data:')
  ) {
    return path;
  }

  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  if (!cleanPath) {
    return base;
  }

  // Separate hash and query parameters
  const [pathnameAndQuery, hash] = cleanPath.split('#');
  const [pathname, query] = (pathnameAndQuery || '').split('?');

  // URL encode individual path segments to handle spaces like "Al Barari residence"
  const encodedSegments = (pathname || '')
    .split('/')
    .map((part) => encodeURIComponent(part))
    .join('/');

  let result = `${base}${encodedSegments}`;
  if (query !== undefined) result += `?${query}`;
  if (hash !== undefined) result += `#${hash}`;

  return result;
}
