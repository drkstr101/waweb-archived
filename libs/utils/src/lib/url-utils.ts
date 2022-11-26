// const gatekeeperUrl =
//   process.env['VERCEL_URL'] ??
//   process.env['URL'] ??
//   process.env['GATEKEEPER_URL'] ??
//   'http://localhost:4200';

// export const GATEKEEPER_URL = new URL(gatekeeperUrl);

/**
 * @deprecated
 *
 * @param path
 * @returns
 */
export function url(path = '') {
  return { href: path };
}

export function isExternal(url: string) {
  return url && url.startsWith('http');
}
