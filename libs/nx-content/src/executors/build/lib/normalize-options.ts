import type { ExecutorContext } from '@nrwl/devkit';
import {
  SpawnOptionsWithStdioTuple,
  StdioNull,
  StdioPipe,
} from 'node:child_process';
import { join } from 'path';
import { BuildExecutorSchema } from '../schema';

interface NormalizedSchema {
  /**
   * Absolute path to the project directory
   */
  projectRoot: string;
  /**
   * Absolute path to the content layer config file
   */
  configFile: string;
  proc: {
    command: string;
    args: ReadonlyArray<string>;
    options: SpawnOptionsWithStdioTuple<StdioNull, StdioPipe, StdioNull>;
  };
}

export default function normalizeOptions(
  options: BuildExecutorSchema,
  context: ExecutorContext
): NormalizedSchema {
  const projectRoot = context.projectGraph.nodes[context.projectName].data.root;
  const configFile = join(projectRoot, options.contentlayerConfig);
  const proc = {
    command: 'pwd',
    args: [],
    options: {
      cwd: projectRoot,
      shell: true,
      stdio: ['ignore', 'pipe', 'inherit'] as [StdioNull, StdioPipe, StdioNull],
    },
  };

  return {
    configFile,
    projectRoot,
    proc,
  };
}
