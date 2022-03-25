import React from 'react';
// @ts-ignore
import { PieceType } from '../types.tsx';

export const Swashbuckler: React.FC<PieceType> = ({ strokeColor }) => (
  <g>
    <path
      d="M154.634 10.6644C148.04 9.42542 141.223 9.77342 134.673 8.33142C128.283 6.92342 123.208 2.73642 117.034 0.787423C111.601 -0.928577 105.233 0.233423 101.002 3.55942C97.071 1.74242 92.604 1.34942 88.132 1.94942C81.3501 2.85942 75.022 5.72942 68.981 8.83342C68.281 9.19342 67.58 9.53642 66.8801 9.88342C55.718 9.60442 44.275 9.62642 33.322 12.0184C23.623 14.1374 14.454 19.0694 8.67004 27.3074C2.19704 36.5284 1.02804 48.2704 0.0300442 59.1664C-0.604956 66.0824 9.00104 67.4854 12.256 62.4774C15.631 57.2854 19.144 52.0814 23.641 47.7794C28.749 42.8924 34.962 40.9684 41.925 40.5224C57.293 39.5384 72.763 40.3634 88.146 39.6824C97.063 39.2874 106.991 35.8584 110.585 28.1064C114.421 34.1174 123.113 37.6914 130.262 38.2334C137.817 38.8074 145.488 37.4344 152.968 39.0084C160.114 40.5124 168.608 45.8344 167.019 54.3464C166.085 59.3464 172.406 62.2944 175.315 57.8444C187.194 39.6614 175.489 14.5854 154.634 10.6644"
      transform="translate(104.0009 27.99998)"
      fill={strokeColor || '#000000'}
      stroke="none"
    />
  </g>
);
