import { SourcebitDataCache } from 'sourcebit-target-next';
import sourcebitDataClient from './sourcebit-data-client';
import { Model, PageModel as Page } from './types';

export const matchPageObject = (it: Model) => it.__metadata.modelType === 'page';

export type ObjectFilter = (value: Model, index?: number, array?: Model[]) => value is Model;

export type PageFilter = (value: Page, index?: number, array?: Page[]) => value is Page;

/**
 * Filter predicate to match page objects
 *
 * @param model
 * @returns
 */
export const matchPages = (model: Model) => model.__metadata.modelName === 'Page';

/**
 * Wrapper API to sourcebit data cache
 */
export class StackbitApi {
  private readonly _objects: Model[];
  private readonly _pages: Page[];
  private readonly _props: Record<string, unknown>;

  private static _singleton: StackbitApi;

  static async get(): Promise<StackbitApi> {
    if (!StackbitApi._singleton) {
      const cache = await sourcebitDataClient.getData();
      const { props = {}, objects = [], pages = [] } = cache;
      StackbitApi._singleton = new StackbitApi({ props, objects, pages });
    }

    return StackbitApi._singleton;
  }

  constructor(data: SourcebitDataCache) {
    this._props = data.props;
    this._objects = data.objects.filter((it) => !matchPageObject(it));

    // TODO We need to figure out why `pages` field in stackbit
    // cache always resolves to `[]`. Until then, we must
    // manually perform the same logic here.
    this._pages = data.objects.filter(matchPageObject);
  }

  /**
   * Returns the resolved global context props
   * @returns
   */
  get props(): Record<string, unknown> {
    return this._props;
  }

  /**
   * Contains a list of all page objects
   * @returns
   */
  get objects(): Model[] {
    return this._objects;
  }

  /**
   * TODO We need to figure out why `pages` field in stackbit
   *      cache always resolves to `[]`. Until then, we must
   *      manually perform the same logic here.
   * @returns {Page[]}
   */
  get pages(): Page[] {
    return this._pages;
  }

  /**
   * Extract objects from the data cache by matching the "layout" property.
   *
   * @param {string} type Name of the model
   * @returns {array} Sourcebit data objects
   */
  // pagesByLayout<T extends IPage>(layout: string): T[] {
  //   return this.getPages().filter((it) => (it as T)?.layout === layout) as T[];
  // }

  /**
   * Find a single model from the data cache by matching the "type"
   * property. Returns only the first match, or throws
   * if missing.
   *
   * @param {string} type Name of the model
   * @returns {Model} First matching object
   */
  // modelByType<T extends IModel>(type: string): T {
  //   const model = this.getObjects().find((it) => it.type === type) as T;
  //   if (!model) {
  //     throw new Error(`A model with type (${type}) could not be located in the cache.`);
  //   }

  //   return model;
  // }
}
