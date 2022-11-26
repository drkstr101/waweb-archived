/**
 * Build a url path for a page object coming from the data cache.
 *
 * @param {relSourcePath} string relative path to resource file
 * @returns url path string for that page
 */
export function pageUrlPath(relSourcePath: string) {
  return relSourcePath
    .replace(/^pages\//, '/') // removes pages directory prefix
    .replace(/\.mdx?$/, '') // removes file extension
    .replace(/^\/index$/, '/') // replaces home page with /
    .replace(/\/index$/, ''); // removes trailing slash from other index pages
}
