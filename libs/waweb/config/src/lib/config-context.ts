import { createContext } from 'react';
import config from './config.json';

export type Config = typeof config;

export const ConfigContext = createContext<Config>(config);
