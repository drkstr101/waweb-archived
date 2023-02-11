import { makeSource } from 'contentlayer/source-files';
import Config from './src/lib/config';
import Page from './src/lib/page';

export default makeSource({
  contentDirPath: 'src',
  documentTypes: [Config, Page],
  disableImportAliasWarning: true,
});
