import { SVGProps } from 'react';

const Shield = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
    <title>{'S Shield 18 N'}</title>
    <path
      d="M15 1.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v6.55a7.804 7.804 0 0 0 2.929 6.093l2.836 2.178a.35.35 0 0 0 .469 0l2.837-2.178A7.804 7.804 0 0 0 15 8.05ZM4.861 11.143A7.24 7.24 0 0 1 4 8V2h10Z"
      style={{
        fill: 'hsl(var(--bc))'
      }}
    />
  </svg>
);

export default Shield;
