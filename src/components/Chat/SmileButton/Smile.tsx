import * as React from 'react';
import { SVGProps } from 'react';

const SvgSmile = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9 17.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17Zm0-1a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
      fill="current"
    />
    <path
      d="M13.444 11.23C12.661 12.745 11.151 13.5 9 13.5c-2.15 0-3.66-.755-4.444-2.27a.5.5 0 1 1 .888-.46C6.04 11.922 7.196 12.5 9 12.5s2.96-.578 3.556-1.73a.5.5 0 0 1 .888.46ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="current"
    />
  </svg>
);

export default SvgSmile;
