import { memo, SVGProps } from 'react';

const Ellipse33Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={3.5} cy={3.5} r={3.5} fill='#FF9F0D' />
  </svg>
);

const Memo = memo(Ellipse33Icon);
export { Memo as Ellipse33Icon };
