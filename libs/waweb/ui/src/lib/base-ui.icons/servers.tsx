import { SVGProps } from 'react';

const Servers = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
    <path
      d="M5.5 5h11a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V3H2V1.25A.25.25 0 0 0 1.75 1h-.5a.25.25 0 0 0-.25.25v15.5a.25.25 0 0 0 .25.25h.5a.25.25 0 0 0 .25-.25V15h3v1.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v.5H2v-4h3v.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V9H2V4h3v.5a.5.5 0 0 0 .5.5Zm.5 9h2v1H6Zm0-6h2v1H6Zm0-6h2v1H6Z"
      style={{
        fill: 'hsl(var(--bc))'
      }}
    />
  </svg>
);

export default Servers;
