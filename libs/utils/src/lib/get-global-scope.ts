/* eslint-disable no-restricted-globals */
import { isNodeEnv } from './is-node-env';

const fallbackGlobalObject = {};

/**
 * Safely get global scope object
 *
 * @returns Global scope object
 */
export function getGlobalObject<T>(): T {
  return (
    isNodeEnv()
      ? global
      : typeof window !== 'undefined'
      ? window
      : typeof self !== 'undefined'
      ? self
      : fallbackGlobalObject
  ) as T;
}
