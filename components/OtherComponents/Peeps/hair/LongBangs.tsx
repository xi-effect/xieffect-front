import React from 'react';
// @ts-ignore
import { PieceType } from '../types.tsx';

export const LongBangs: React.FC<PieceType> = ({ strokeColor, backgroundColor }) => (
  <g>
    <path
      d="M343.866 57.1786C333.565 19.9926 294.19 3.76663 258.728 1.19163C162.714 -8.78937 64.9843 44.7346 22.4183 131.526C-11.6547 197.429 -12.7217 266.659 60.5203 304.288C64.5203 306.493 68.6973 308.85 72.9633 310.99C76.6693 314.436 80.4863 317.747 84.6523 320.527C124.535 346.753 173.486 358.096 220.924 355.636C290.965 354.224 315.969 306.697 331.27 245.748C347.408 185.069 356.433 119.227 343.866 57.1786L343.866 57.1786Z"
      transform="translate(62.00051 145.9994)"
      fill={backgroundColor || '#FFFFFF'}
      stroke="none"
    />
    <path
      d="M525.844 506.684C522.574 496.794 518.474 487.204 514.644 477.514C513.834 472.684 513.294 467.814 513.155 462.904C512.624 445.364 515.905 427.674 519.584 410.594C527.064 375.884 534.994 341.534 538.974 306.184C546.084 242.954 541.854 177.204 513.094 119.484C488.174 69.4841 445.944 28.5941 391.394 13.2741C375.268 8.74313 358.671 6.24413 341.96 5.24613C339.891 4.91713 337.825 4.59513 335.769 4.28513C312.525 0.781132 288.995 -0.964868 265.501 0.546132C226.541 3.05313 187.945 14.2491 155.497 36.3931C122.828 58.6901 99.6156 89.9541 88.8146 128.087C77.5786 167.757 78.5316 210.72 59.1286 247.912C53.3966 258.9 46.7056 269.346 40.3246 279.966C23.3936 298.857 5.01159 319.858 0.983589 345.833C-3.98641 377.934 14.4836 405.064 31.9636 430.114C47.7636 452.734 69.2036 483.974 52.9436 511.824C45.2736 524.964 32.9836 534.794 23.7536 546.774C14.1836 559.214 6.71359 573.494 2.85359 588.754C-4.39641 617.413 2.27359 647.284 21.6636 669.684C31.7636 681.344 44.7336 689.054 58.7736 695.064C73.1436 701.204 87.1836 707.034 99.0636 717.484C104.494 722.254 109.464 727.484 114.164 732.964C118.544 739.814 123.644 746.214 129.394 752.074C135.724 758.524 148.124 749.694 142.314 742.104C141.884 741.544 141.464 740.994 141.034 740.434C136.784 734.894 132.514 729.354 128.044 723.994C114.714 702.873 109.584 677.014 116.214 652.344C117.934 645.934 120.354 639.854 123.365 634.114C124.004 635.784 124.704 637.434 125.444 639.064C128.324 645.384 132.365 652.873 137.504 659.274C137.704 663.663 138.365 668.014 139.644 672.274C147.564 698.684 174.044 711.714 197.924 721.854C200.264 722.854 202.574 723.814 204.844 724.764C211.084 727.373 217.684 718.484 213.794 713.123C212.774 711.714 211.784 710.274 210.844 708.814C199.644 691.474 194.314 670.734 197.334 650.074C200.514 628.224 213.394 610.144 226.184 592.794C238.744 575.734 252.234 558.324 257.854 537.514C264.074 514.524 258.414 491.604 248.814 470.444C240.024 451.081 228.315 433.234 218.496 414.404C221.858 417.757 225.327 421 228.901 424.128C232.92 427.646 237.049 431.672 241.812 434.152C245.334 435.985 248.862 431.597 246.073 428.63C242.407 424.732 237.716 421.72 233.645 418.241C229.737 414.902 225.942 411.429 222.241 407.862C217.684 403.471 213.349 398.873 209.169 394.136C205.824 385.615 203.068 376.865 200.824 367.984C197.774 355.964 194.954 343.174 195.174 330.714C195.394 317.934 202.034 308.984 210.874 300.404C214.618 296.771 218.398 293.181 222.171 289.584C230.207 283.685 237.787 277.095 245.15 270.523C258.27 258.812 270.96 246.433 283.079 233.692C286.33 230.274 289.554 226.818 292.738 223.322C303.863 211.906 314.473 199.986 324.474 187.654C334.414 184.034 343.964 179.244 352.924 173.604C349.024 177.554 345.084 181.454 341.164 185.384C332.434 194.144 323.365 202.944 313.244 210.083C312.204 210.824 312.834 212.394 314.115 212.144C326.984 209.574 339.024 205.294 350.264 198.474C361.694 191.534 371.764 182.104 381.164 172.644C386.484 170.244 391.615 167.154 396.304 164.114C396.554 163.954 396.804 163.784 397.054 163.623C392.434 178.264 385.655 194.844 371.204 200.064C370.734 200.234 370.764 201.014 371.324 200.984C383.498 200.27 393.282 194.793 401.006 186.81C407.218 182.34 413.146 177.603 418.803 172.446C424.283 167.45 429.474 162.092 434.404 156.544C427.514 170.193 419.796 183.539 412.184 196.734C411.784 197.434 412.624 198.384 413.344 197.894C429.414 187.014 441.604 172.974 451.574 156.373C453.046 153.929 454.451 151.445 455.821 148.942C454.787 152.859 453.658 156.751 452.449 160.623C450.26 167.632 448.105 174.657 445.912 181.662C444.73 185.439 443.289 189.13 441.708 192.758C440.576 195.354 439.094 197.945 438.864 200.792C438.849 200.981 439.055 201.105 439.22 201.064C445.628 199.462 451.595 192.154 456.161 187.627C458.704 185.106 461.086 182.339 463.277 179.421C463.684 196.228 463.964 213.037 463.594 229.894C462.905 260.854 460.905 291.804 458.344 322.663C456.084 349.944 454.414 378.574 439.194 402.284C427.414 420.634 408.314 433.333 387.564 439.484C385.734 440.034 383.894 440.524 382.044 440.964C352.004 448.094 322.084 440.014 295.524 425.734C287.544 421.444 280.724 433.083 288.424 437.873C317.244 455.814 353.774 461.924 386.394 453.884C385.365 492.413 404.354 528.964 423.244 561.644C433.814 579.934 444.394 598.104 451.865 617.934C458.204 634.774 462.514 652.244 463.964 670.214C465.684 691.394 463.994 712.694 461.034 733.694C460.874 734.833 460.714 735.984 460.544 737.123C459.884 741.634 463.934 745.413 468.324 743.104C487.734 732.904 496.104 711.163 501.194 691.064C505.954 672.234 509.184 653.034 510.984 633.704C513.624 640.994 515.764 648.464 517.424 656.083C517.655 657.174 517.874 658.264 518.094 659.354C519.354 665.724 528.994 665.274 530.534 659.354C530.814 658.284 531.084 657.214 531.334 656.134C539.284 623.984 541.424 590.454 537.224 557.583C535.014 540.294 531.324 523.234 525.844 506.684"
      transform="translate(-74.00029 46.99987)"
      fill={strokeColor || '#000000'}
      stroke="none"
    />
  </g>
);
