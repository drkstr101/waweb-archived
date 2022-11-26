import { createContext, createElement, useContext, useMemo } from 'react';
import { Components, MergeComponents, UiProviderProps } from './types';

// export type Components<T> = Record<string, ComponentType<T>>;

const Context = createContext({});

const emptyObject: Components = {};

/**
 * Get current components from the  Context.
 *
 * @param {Components|MergeComponents} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
export function useComponents(components: Components | MergeComponents): Components {
  const contextComponents = useContext(Context);
  // Memoize to avoid unnecessary top-level context changes
  return useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents);
    }

    return { ...contextComponents, ...components };
  }, [contextComponents, components]);
}

/**
 * Provider for  context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
export function UiProvider({ children, components, disableParentContext }: UiProviderProps) {
  let allComponents = useComponents(components);

  if (disableParentContext) {
    allComponents = (components as Components) ?? emptyObject;
  }

  return createElement(Context.Provider, { value: allComponents }, children);
}
