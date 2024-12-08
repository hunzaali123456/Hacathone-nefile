import { memo, SVGProps } from 'react';

const CaretrightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M4.5 2.25L8.25 6L4.5 9.75' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(CaretrightIcon);
export { Memo as CaretrightIcon };
