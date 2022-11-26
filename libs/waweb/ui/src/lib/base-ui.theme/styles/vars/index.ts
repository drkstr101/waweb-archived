import dark from './dark.module.css';
import darkest from './darkest.module.css';
import large from './large.module.css';
import light from './light.module.css';
import lightest from './dark.module.css';
import medium from './medium.module.css';
import global from './global.module.css';
import tokens from './tokens';

export type { ThemeTokens } from './tokens';
export const vars = {
  palette: { dark, darkest, light, lightest },
  scale: { large, medium },
  tokens,
  global
};
