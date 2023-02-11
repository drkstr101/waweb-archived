import { offsetFromRoot, Tree, workspaceRoot } from '@nrwl/devkit';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import type * as ts from 'typescript';
export { compileTypeScript } from './compilation';
export type { TypeScriptCompilationOptions } from './compilation';
export { findNodes } from './find-nodes'; // TODO(v16): remove this
export { getSourceNodes } from './get-source-nodes';
export { readTsConfig } from './compilation';

const normalizedAppRoot = workspaceRoot.replace(/\\/g, '/');

let tsModule: typeof import('typescript');

function readTsConfigOptions(tsConfigPath: string) {
  if (!tsModule) {
    tsModule = require('typescript');
  }

  const readResult = tsModule.readConfigFile(
    tsConfigPath,
    tsModule.sys.readFile
  );

  // we don't need to scan the files, we only care about options
  const host: Partial<ts.ParseConfigHost> = {
    readDirectory: () => [],
    fileExists: tsModule.sys.fileExists,
  };

  return tsModule.parseJsonConfigFileContent(
    readResult.config,
    host as ts.ParseConfigHost,
    dirname(tsConfigPath)
  ).options;
}

let compilerHost: {
  host: ts.CompilerHost;
  options: ts.CompilerOptions;
  moduleResolutionCache: ts.ModuleResolutionCache;
};

/**
 * Find a module based on it's import
 *
 * @param importExpr Import used to resolve to a module
 * @param filePath
 * @param tsConfigPath
 */
export function resolveModuleByImport(
  importExpr: string,
  filePath: string,
  tsConfigPath: string
) {
  compilerHost = compilerHost || getCompilerHost(tsConfigPath);
  const { options, host, moduleResolutionCache } = compilerHost;

  const { resolvedModule } = tsModule.resolveModuleName(
    importExpr,
    filePath,
    options,
    host,
    moduleResolutionCache
  );

  if (!resolvedModule) {
    return;
  } else {
    return resolvedModule.resolvedFileName.replace(`${normalizedAppRoot}/`, '');
  }
}

function getCompilerHost(tsConfigPath: string) {
  const options = readTsConfigOptions(tsConfigPath);
  const host = tsModule.createCompilerHost(options, true);
  const moduleResolutionCache = tsModule.createModuleResolutionCache(
    workspaceRoot,
    host.getCanonicalFileName
  );
  return { options, host, moduleResolutionCache };
}

export function getRootTsConfigPathInTree(tree: Tree): string | null {
  for (const path of ['tsconfig.base.json', 'tsconfig.json']) {
    if (tree.exists(path)) {
      return path;
    }
  }

  return 'tsconfig.base.json';
}

export function getRelativePathToRootTsConfig(
  tree: Tree,
  targetPath: string
): string {
  return offsetFromRoot(targetPath) + getRootTsConfigPathInTree(tree);
}

export function getRootTsConfigFileName(): string | null {
  for (const tsConfigName of ['tsconfig.base.json', 'tsconfig.json']) {
    const tsConfigPath = join(workspaceRoot, tsConfigName);
    if (existsSync(tsConfigPath)) {
      return tsConfigName;
    }
  }

  return null;
}

export function getRootTsConfigPath(): string | null {
  const tsConfigFileName = getRootTsConfigFileName();

  return tsConfigFileName ? join(workspaceRoot, tsConfigFileName) : null;
}
