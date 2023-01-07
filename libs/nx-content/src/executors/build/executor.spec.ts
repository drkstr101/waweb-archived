import { ExecutorContext } from '@nrwl/devkit';
import executor from './executor';
import { BuildExecutorSchema } from './schema';

const options: BuildExecutorSchema = {
  contentlayerConfig: 'contentlayer.config.js',
};

const mockContext: ExecutorContext = {
  root: process.cwd(),
  projectName: 'test',
  projectGraph: {
    dependencies: {},
    nodes: {
      test: {
        name: 'test',
        type: 'lib',
        data: { root: `${process.cwd()}/libs/nx-content`, files: [] },
      },
    },
  },
  workspace: { projects: {}, version: 1 },
  cwd: process.cwd(),
  isVerbose: false,
};

describe('Build Executor', () => {
  it('can run', async () => {
    const output = await executor(options, mockContext);
    expect(output.success).toBe(true);
  });
});
