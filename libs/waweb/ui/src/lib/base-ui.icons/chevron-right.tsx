import { SVGProps } from 'react';

const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
    <title>{'S ChevronRight 18 N'}</title>
    <path
      d="M12 9a.994.994 0 0 1-.292.705l-3.992 3.99a1 1 0 1 1-1.436-1.387l.025-.024L9.591 9 6.305 5.715A1 1 0 0 1 7.69 4.28l.025.025 3.991 3.99A.994.994 0 0 1 12 9Z"
      style={{
        fill: 'hsl(var(--bc))'
      }}
    />
  </svg>
);

export default ChevronRight;
