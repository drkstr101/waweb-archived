declare module 'sourcebit-target-next' {
  export interface SourcebitDataCache {
    readonly objects: IModel[];
    readonly pages: IPage[];
    readonly props: Record<string, unknown>;
  }

  export class SourcebitDataClient {
    async getStaticPropsForPageAtPath(path: string): Promise<Record<string, any>>;
    async getStaticPaths(): Promise<string[]>;
    async getData(): Promise<SourcebitDataCache>;
  }

  export const sourcebitDataClient: SourcebitDataClient;
}
