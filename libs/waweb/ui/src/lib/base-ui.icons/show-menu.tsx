import { SVGProps } from 'react';

const styles = {
  fill: 'hsl(var(--bc))'
};
const ShowMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
    <rect className="a" height={2} rx={0.5} width={14} x={2} y={8} style={styles} />
    <rect className="a" height={2} rx={0.5} width={14} x={2} y={3} style={styles} />
    <rect className="a" height={2} rx={0.5} width={14} x={2} y={13} style={styles} />
  </svg>
);

export default ShowMenu;
