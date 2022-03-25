import React from 'react';
// @ts-ignore
import { PieceType } from '../types.tsx';

export const FullMajestic: React.FC<PieceType> = ({ strokeColor }) => (
  <g>
    <path
      d="M302.883 83.4527C303.036 83.7837 303.163 84.1477 303.254 84.5507C314.029 134.978 316.76 193.085 294.606 240.715C230.608 298.341 92.0503 276.209 36.5633 213.492C-6.02371 185.505 -1.73271 121.227 2.67129 75.3917C5.26029 52.4177 4.91229 27.2277 15.3663 6.25674C14.5553 1.07074 22.0143 -2.79426 24.4043 2.61074C35.7143 28.1507 47.4443 54.4707 65.5853 76.0097C82.5873 99.6767 134.37 131.387 144.554 85.8787C157.467 57.3877 206.941 52.2147 234.314 56.7307C251.322 61.0884 256.229 71.7796 260.604 81.3112C265.338 91.6252 269.449 100.582 287.593 98.6867C288.007 98.8067 288.438 98.8507 288.854 98.8187C290.96 95.9897 292.362 91.9387 293.916 88.6647C293.777 87.9337 293.557 87.1867 293.491 86.4497C295.505 83.4837 298.764 81.8957 302.883 83.4527ZM227.846 126.239C229.605 128.053 231.318 129.817 232.994 131.311C240.134 136.101 245.424 126.911 245.114 120.661C244.634 111.361 236.694 93.5407 225.914 89.1137C203.848 84.2127 165.114 92.5337 174.484 122.871C176.774 128.331 183.434 135.441 190.154 133.261C195.214 131.621 196.554 123.261 199.863 119.532C210.834 108.709 219.828 117.977 227.846 126.239Z"
      transform="translate(-4.999991 -27.00004)"
      fill={strokeColor || '#000000'}
      fillRule="evenodd"
      stroke="none"
    />
  </g>
);
