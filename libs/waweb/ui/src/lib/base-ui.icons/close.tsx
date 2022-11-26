import * as React from 'react';
import { SVGProps } from 'react';

const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path d="m9.518 8 5.23-5.229a1.073 1.073 0 0 0-1.519-1.517L8.001 6.483l-5.229-5.23a1.073 1.073 0 0 0-1.518 1.518l5.23 5.23-5.23 5.228a1.073 1.073 0 1 0 1.518 1.518l5.229-5.229 5.228 5.23a1.073 1.073 0 0 0 1.518-1.519Z" />
  </svg>
);

export default Close;
