import { ReactChild, ReactFragment, ReactPortal } from 'react';

export type FunctionComponent<Props> = (props: Props) => JSX.Element;
export type ClassComponent<Props> = new (props: Props) => JSX.ElementClass;
export type Component<Props> = FunctionComponent<Props> | ClassComponent<Props>;

export interface NestedComponents {
  [key: string]: NestedComponents | Component<any> | keyof JSX.IntrinsicElements;
}

/**
 * Components may be passed as the `components`.
 *
 * The key is the name of the element to override. The value is the component to render instead.
 */
export type Components = NestedComponents & {
  [Key in keyof JSX.IntrinsicElements]?:
    | Component<JSX.IntrinsicElements[Key]>
    | keyof JSX.IntrinsicElements;
} & {
  /**
   * If a wrapper component is defined, the component will be wrapped inside of it.
   */
  wrapper?: Component<any>;
};

export type MergeComponents = (components: Components) => Components;

export interface UiProviderProps {
  components: Components | MergeComponents;
  disableParentContext?: boolean;
  children: boolean | ReactChild | ReactFragment | ReactPortal | null;
}
