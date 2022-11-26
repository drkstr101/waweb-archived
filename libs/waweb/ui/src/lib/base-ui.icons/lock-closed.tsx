import { SVGProps } from 'react';

const LockClosed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
    <title>{'S LockClosed 18 N'}</title>
    <path
      d="M14.5 8H14V7A5 5 0 0 0 4 7v1h-.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5ZM6 7a3 3 0 0 1 6 0v1H6Zm4 6.111V14.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.389a1.5 1.5 0 1 1 2 0Z"
      style={{
        fill: 'hsl(var(--bc))'
      }}
    />
  </svg>
);

export default LockClosed;
