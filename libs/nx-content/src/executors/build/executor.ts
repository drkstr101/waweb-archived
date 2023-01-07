import type { ExecutorContext } from '@nrwl/devkit';
import { spawn } from 'node:child_process';
import { Readable } from 'node:stream';
import normalizeOptions from './lib/normalize-options';
import { BuildExecutorSchema } from './schema';

async function readableToString(readable: Readable) {
  // lets have a ReadableStream as a stream variable
  const chunks = [];

  for await (const chunk of readable) {
    chunks.push(Buffer.from(chunk));
  }

  return Buffer.concat(chunks).toString('utf-8');
}

export default async function runExecutor(
  options: BuildExecutorSchema,
  context: ExecutorContext
) {
  let success = true;
  try {
    const opts = normalizeOptions(options, context);
    const childProcess = spawn(
      opts.proc.command,
      opts.proc.args,
      opts.proc.options
    );
    if (context.isVerbose) {
      console.log(await readableToString(childProcess.stdout));
    }
  } catch (error) {
    console.error(error);
    success = false;
  }

  return { success };
}
