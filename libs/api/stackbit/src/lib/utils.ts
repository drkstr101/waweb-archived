import { StackbitApi } from './stackbit-api';

export function findPageAtPath(api: StackbitApi, slug: string | string[]) {
  // build the current path from slug params
  const urlPath = slug ? (typeof slug === 'string' ? slug : '/' + slug.join('/')) : '/';
  const page = api.pages.find(
    (it) => it.slug === urlPath || it.__metadata['urlPath'] === urlPath
  );
  if (!page) throw new Error(`Failed to locate page data for ${urlPath}`);

  return page;
}
