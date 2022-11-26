import React from 'react';
import useConfig from './use-config';

export const BasicConfigUsage = () => {
  const config = useConfig();
  return <a href={config.repo}>{config.brandName}</a>;
};
