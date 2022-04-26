import React from 'react';
// @ts-ignore
import { PieceType } from '../../types.tsx';

export const DocProtectiveClothe: React.FC<PieceType> = ({ strokeColor, backgroundColor }) => (
  <g transform="translate(-270 479)">
    <path
      d="M175.455 2469.58C141.999 2469.58 108.487 2463.14 76.0781 2456.9L74.9271 2456.64C61.4131 2453.6 47.4381 2450.46 35.1291 2444.55C20.3481 2437.18 9.14411 2423.19 3.65911 2405.18C-2.85689 2383.79 -0.556885 2358.92 9.65311 2340.2C11.8561 2336.81 14.0751 2333.41 16.2961 2330.02C37.1091 2298.18 58.6311 2265.27 68.6331 2226.69L72.1461 2213.14L60.0411 2219.66C59.9011 2219.74 59.7131 2219.81 59.3771 2219.81C56.8581 2219.81 51.2681 2216.03 44.8981 2207.72C19.8411 2166.1 23.4961 2113.92 27.0321 2063.46C28.0211 2049.34 28.9551 2036.01 29.3001 2022.79C39.7231 1884.46 77.2841 1748.64 113.609 1617.29L118.896 1598.15C146.508 1491.67 162.072 1384.89 165.182 1280.68C166.019 1258.09 167.62 1231.98 176.043 1208.57L177.677 1204.03L173.759 1201.34C157.136 1189.89 152.075 1167.15 147.61 1147.09L147.284 1145.62C139.614 1111.63 134.155 1069.1 160.204 1041.67L164.355 1037.3L154.673 1027.47L150.459 1032.13C150.213 1032.4 149.766 1032.63 149.376 1032.69C105.549 920.702 81.9911 795.52 77.3591 650.026C72.7831 506.276 87.6481 364.347 101.116 256.741C108.603 209.507 114.653 176.621 129.814 150.939C145.84 123.795 172.363 105.633 215.814 92.051L216.055 91.97C226.575 88.178 237.575 84.58 248.214 81.099C298.807 64.551 351.123 47.437 385.021 0.647C385.245 0.342 385.473 0.127 385.641 0C414.693 11.519 447.845 17.121 486.964 17.12C503.622 17.12 521.611 16.145 543.358 14.062C557.827 30.473 590.398 62.952 621.467 62.951C622.6 62.951 623.736 62.906 624.842 62.819C628.26 62.592 631.765 62.474 635.187 62.474C685.825 62.474 729.214 87.774 764.151 137.673C791.378 176.56 812.958 230.726 824.916 290.193L824.976 290.462C840.898 354.863 845.86 422.211 850.659 487.342C851.49 498.628 852.35 510.299 853.253 521.774L853.27 521.96C857.017 556.429 864.107 590.739 870.965 623.919C874.162 639.385 877.467 655.377 880.38 671.138C882.825 688.502 887.643 710.844 893.22 736.703C908.439 807.268 929.281 903.911 907.345 943.599L906.713 944.742L906.592 946.05C905.395 958.964 903.764 973.799 899.52 986.447L898.994 988.017L899.309 989.647C899.865 992.508 897.245 994.726 891.162 998.617C890.29 999.175 889.441 999.719 888.645 1000.26L885.529 1002.36L885.99 1006.15C890.684 1044.77 884.91 1084.06 869.73 1116.81C863.437 1129.41 852.927 1150.38 838.38 1150.38C836.937 1150.38 835.437 1150.18 833.922 1149.78L831.372 1149.1L829.159 1150.56C827.088 1151.93 824.37 1152.6 820.851 1152.6C816.963 1152.6 812.762 1151.81 808.698 1151.04C807.547 1150.83 806.424 1150.61 805.339 1150.43L799.72 1149.45L798.481 1155.15C774.457 1265.72 756.121 1386.89 742.422 1525.56C730.261 1648.68 722.899 1772.53 715.819 1899.15C709.071 1980.51 700.407 2066.62 675.636 2146.5L674.47 2150.26L677.318 2152.92C699.53 2173.61 727.373 2184.4 754.299 2194.84C776.311 2203.36 799.073 2212.18 818.103 2226.33L818.253 2226.44C856.904 2253.37 900.705 2283.89 917.067 2330.5C921.688 2347.47 919.964 2361.61 911.941 2372.54C899.7 2389.22 871.763 2399.29 837.21 2399.49L836.981 2399.5L836.753 2399.51C814.603 2401.38 792.517 2402.33 771.109 2402.33C735.767 2402.33 701.286 2399.76 668.624 2394.68L668.469 2394.66C639.63 2390.96 610.617 2383.63 582.559 2376.53C566.717 2372.53 550.336 2368.38 534.225 2364.96C514.441 2360.36 496.126 2348.98 482.648 2332.89C468.805 2316.37 461.349 2296.13 461.653 2275.92C461.921 2254.26 470.746 2228.16 489.856 2218.65L503.091 2212.05L489.134 2207.28C481.258 2204.58 477.786 2196.42 473.767 2186.96C472.122 2183.09 470.422 2179.08 468.332 2175.43C451.431 2138.74 438.3 2098.68 429.3 2056.35L429.244 2056.11C403.583 1955.16 420.747 1852.2 437.346 1752.62C451.788 1665.98 466.722 1576.39 453.98 1487.4L442.24 1486.74C424.25 1557.17 411.392 1631.39 398.958 1703.16C383.886 1790.15 368.301 1880.1 343.41 1964.64C315.563 2059.22 278.797 2136.65 231.01 2201.38L228.478 2204.81L230.751 2208.43C230.957 2208.76 231.039 2208.97 231.071 2209.07C230.538 2210.18 226.872 2212.51 222.272 2213.13L219.73 2213.48L218.214 2215.6C210.618 2226.23 219.463 2239.75 224.748 2247.82C225.667 2249.23 226.536 2250.56 227.152 2251.61C234.478 2264.09 241.189 2276.71 246.218 2286.3L248.02 2289.63C261.582 2314.72 278.461 2345.93 285.015 2375.96C292.381 2409.71 285.191 2435.28 263.037 2454.13C254.045 2460.96 243.22 2464.88 233.314 2464.88C230.829 2464.88 228.38 2464.64 226.035 2464.16L224.75 2463.89L223.476 2464.21C208.645 2467.82 192.937 2469.58 175.455 2469.58"
      transform="translate(279.0303 16.5906)"
      fill="#8FA7DF"
      stroke="none"
    />
    <path
      d="M272.655 2.47404L270.032 2.71058C257.248 2.32561 252.598 12.333 250.231 22.9762L250.016 23.9756C249.772 26.2732 248.737 28.966 247.667 31.7478C245.371 37.7172 242.918 44.096 247.801 47.8566C268.902 58.1324 293.061 58.9163 315.944 60.5828L318.838 60.7996C345.074 64.9046 368.914 66.5916 394.298 56.5766C397.924 59.0586 404.219 56.1296 402.219 50.9516C394.685 35.9426 392.603 14.9706 377.374 5.98958C343.325 -2.12791 307.235 -0.602821 272.655 2.47404ZM678.442 1066.97C703.648 1069.9 720.573 1061.22 731.806 1055.46C741.145 1050.67 746.549 1047.9 749.505 1055.5C752.928 1066.65 748.672 1078.8 744.785 1089.9C743.882 1092.48 742.998 1095.01 742.235 1097.45C730.237 1130.42 725.685 1176.76 690.297 1192.51C670.739 1199.07 658.69 1184.8 667.225 1165.6C675.474 1136.39 672.164 1106.02 668.379 1076.54C663.277 1070.54 672.856 1060.87 678.442 1066.97ZM138.254 1060.44C137.752 1058.45 135.225 1057.29 135.383 1060.17C108.979 1069.69 81.6766 1076.95 53.6486 1079.02C50.8221 1079.25 47.8186 1079.28 44.754 1079.31C34.4022 1079.42 23.3524 1079.53 16.0656 1087.36C-13.0414 1125.9 2.56062 1195.15 22.2966 1235.28C36.0041 1252.27 57.7357 1251.76 78.6125 1251.27C86.6151 1251.09 94.4918 1250.9 101.743 1251.71C104.177 1251.77 106.61 1251.83 109.044 1251.9L109.059 1251.9C122.99 1252.26 136.921 1252.62 150.858 1252.47C155.874 1252.41 159.68 1248.27 159.874 1243.23C160.726 1221.01 161.991 1198.82 163.145 1176.62C164.085 1176.36 164.995 1176.11 165.874 1175.87C184.333 1170.83 189.676 1169.37 188.996 1146.93L188.945 1145.46C186.43 1114.72 161.601 1094.87 144.902 1071.07C145.929 1066.53 142.674 1061.67 138.254 1060.44Z"
      transform="translate(420.4324 -28.00068)"
      fill={backgroundColor || '#FFFFFF'}
      fillRule="evenodd"
      stroke="none"
    />
    <path
      d="M686.239 11.5564C680.747 3.66074 673.683 -6.49346 667.996 5.55034C648.555 2.26541 629.482 11.5395 611.28 20.3899C605.185 23.3537 599.187 26.2701 593.306 28.6513C578.26 35.8343 563.178 43.0403 547.329 48.1913C531.58 54.1783 514.517 54.3323 498.63 59.5163C469.359 69.8723 462.11 124.549 470.617 151.784C476.775 180.007 499.147 198.425 525.488 205.833C535.486 210.021 547.922 212.355 558.155 208.546C623.809 236.045 695.147 236.784 764.913 239.751L771.381 240.033C779.752 239.66 790.253 240.242 801.689 240.877C846.728 243.374 906.272 246.676 907.319 195.586C907.079 193.219 906.254 190.998 904.923 189.252C899.255 147.5 858.335 116.854 826.022 94.2643L824.055 92.8913C816.297 81.4149 803.395 73.5806 791.869 66.0744L789.926 64.8023C760.488 41.4233 719.039 40.4673 690.293 16.9843C689.095 15.6631 687.725 13.6924 686.239 11.5564ZM169.309 65.7501C163.875 66.5126 158.56 67.2584 153.8 67.0629C131.356 68.9359 108.882 70.9209 86.5061 73.6449C81.2458 73.3879 76.3082 74.4032 71.3462 75.4234C67.8715 76.1379 64.3849 76.8548 60.7671 77.1389C55.5791 77.9289 54.9761 84.8809 57.7881 88.3559C47.1421 118.61 34.5801 148.053 18.4791 175.723C3.91708 202.557 -9.16692 237.844 8.52508 266.616C15.3901 277.78 30.5621 292.179 44.6791 288.271C98.5461 304.779 155.262 308.725 211.216 309.26C253.556 313.599 275.756 260.886 271.666 223.936C266.392 177.344 235.867 140.67 217.358 99.1729C212.854 89.9659 208.078 80.6359 204.174 71.1439C203.895 70.4669 203.011 70.1379 202.477 70.5169C194.002 62.2853 181.362 64.0589 169.309 65.7501Z"
      transform="translate(286.1029 2168.059)"
      fill="#FFFFFF"
      fillRule="evenodd"
      stroke="none"
    />
    <path
      d="M393.281 0.290672C390.471 -0.716328 387.822 1.04567 386.236 3.23467C375.98 17.3877 363.934 28.7377 350.69 38.1637C348.757 37.9047 346.759 38.0417 344.878 38.5597C339.463 40.05 336.429 43.9077 333.942 48.3384L333.581 48.9907C298.641 68.6847 257.864 78.8007 220.097 92.4137C165.416 109.88 123.487 139.103 113.183 200.505C90.3387 302.212 82.7585 406.798 79.8216 510.914L79.6475 517.288C73.1725 694.27 82.0945 876.63 150.06 1041.77C150.706 1043.27 151.751 1044.21 152.966 1044.7C152.686 1045.27 152.424 1045.85 152.168 1046.43L151.409 1048.17C149.488 1052.55 147.83 1057.05 146.212 1061.56C143.62 1068.79 142.551 1076.01 141.61 1083.49L141 1088.4C140.886 1089.31 141.214 1090 141.757 1090.45C139.525 1111.23 142.991 1133.42 147.462 1153.25L148.776 1159.13C153.299 1179.13 159.132 1200.77 176.444 1212.69C168.281 1235.38 166.276 1259.96 165.314 1284.23L165.217 1286.74C162.019 1393.5 145.911 1499.55 119.154 1602.73C80.5355 1742.6 40.2975 1883.09 29.3375 2028.71C29.082 2038.18 28.3171 2049.33 27.4838 2061.48C23.4051 2120.93 17.6866 2204.29 62.0255 2231.58C64.6235 2232.99 67.0755 2232.64 68.8685 2231.36C61.0485 2257.79 49.4565 2283.44 34.7445 2306.56C26.8845 2318.92 17.4035 2330.2 10.5685 2343.24C-9.82552 2380.32 -0.822517 2436.72 38.6095 2456.37C50.4806 2462.07 63.4637 2465.23 76.2663 2468.14L80.9115 2469.18C113.569 2476.36 146.888 2480.94 180.304 2481.68C197.334 2482.45 214.46 2481.08 230.895 2476.44C245.517 2479.42 261.068 2474.17 272.772 2465.22C325.806 2420.25 289.27 2348.45 261.779 2297.5L257.528 2289.64C251.362 2277.87 245.041 2266.14 238.324 2254.69C237.633 2253.51 236.741 2252.15 235.764 2250.65C230.913 2243.24 223.973 2232.63 229.082 2225.49C236.148 2224.53 246.84 2219.32 241.821 2211.35C390.477 2010.01 392.633 1746.45 450.264 1509.89C452.808 1516 454.68 1522.37 455.625 1529.24C456.684 1536.92 456.313 1544.69 457.206 1552.38C457.686 1556.49 458.203 1560.6 458.863 1564.68C458.905 1629.17 448.179 1693.51 437.459 1757.82C420.46 1859.8 403.477 1961.68 429.472 2063.91C438.296 2105.46 451.313 2146.09 469.057 2184.56C471.851 2190.65 474.753 2196.68 477.762 2202.66C480.901 2210.13 485.22 2216.98 493.26 2219.36C471.473 2230.22 461.979 2258.58 461.687 2282.07C460.999 2327.92 496.454 2367.38 538.997 2377.22C543.64 2378.28 549.194 2379.21 554.675 2379.33C559.107 2381.93 564.336 2382.97 569.201 2384.34L572.146 2385.16C605.538 2394.4 639.57 2401.67 673.755 2407.01C729.65 2415.69 786.984 2416.64 843.276 2411.9C889.294 2411.38 944.641 2393.87 928.811 2334.88C912.825 2289.05 871.794 2258.47 833.654 2231.79L827.66 2227.6C804.078 2212.5 779.127 2200.61 753.061 2190.85C729.836 2182.15 704.969 2173.19 687.384 2154.62C699.167 2118.53 706.205 2080.85 712.384 2043.33L713.093 2039C733.365 1904.63 734.359 1768.31 745.24 1633.01C754.304 1477.11 779.091 1323.26 808.812 1170.35L810.637 1160.99C817.555 1166.17 830.868 1166.49 838.443 1161.98C858.746 1167.39 871.716 1144.43 879.896 1128.27L881.147 1125.77C892.698 1100.88 898.665 1073.32 899.509 1045.68C900.35 1045.51 901.063 1044.89 901.287 1043.65C902.518 1036.83 902.776 1030.31 902.836 1023.38C902.849 1021.98 902.97 1020.39 903.098 1018.72C903.362 1015.28 903.651 1011.49 903.049 1008.34C907.899 1005.06 912.454 1001.04 911.227 994.7C915.387 982.312 917.105 968.454 918.368 955.266L918.594 952.877C941.856 912.688 920.665 813.914 904.693 739.466C899.387 714.734 894.657 692.687 892.324 676.365C883.163 626.765 870.727 577.767 865.263 527.526C859.132 449.638 855.635 371.314 836.828 295.197C817.946 213.951 786.947 122.168 710.872 80.2047C686.436 67.4387 658.974 61.6537 631.666 62.8917C629.086 62.1597 626.504 61.4437 623.878 61.0437C620.581 60.5417 617.253 60.5987 614.006 61.1617C589.94 50.9477 568.502 34.5107 551.842 13.8867C499.384 19.0487 444.348 20.6547 393.281 0.290672ZM361.052 47.4757C373.635 38.2767 384.802 27.3577 393.833 13.9697C430.442 26.4437 469.18 31.0667 507.481 28.0797C507.522 28.1237 507.562 28.1677 507.609 28.2017C512.72 31.7717 512.868 37.4267 513.875 43.1477L514.43 46.248C515.366 51.4122 516.35 56.5642 517.189 61.7467C517.392 65.6927 517.613 69.6207 517.792 73.4987L517.909 75.8849C518.815 93.3765 520.829 110.71 523.295 128.005C532.792 253.545 550.243 378.729 570.771 502.498C562.727 507.423 558.355 517.208 558.552 526.742C558.32 527.63 558.175 528.446 558.133 529.165C557.874 533.467 559.507 537.1 562.204 539.909C562.448 540.314 562.703 540.712 562.973 541.103C564.555 543.396 566.839 544.765 569.464 544.664C576.293 547.395 584.626 547.116 589.766 542.901C595.901 537.867 597.41 528.709 597.607 521.104L597.614 520.753C597.76 513.133 596.253 504.039 588.805 500.487L588.352 500.294C588.398 496.066 586.458 491.72 582.85 489.688C562.081 360.212 548.126 229.704 529.644 99.8917C530.105 93.9497 530.371 87.9787 530.359 82.0507C530.342 74.3227 528.896 66.4466 527.365 58.8112L526.529 54.6727C525.889 51.4917 524.99 46.5737 523.469 41.7307L523.45 41.4561C523.172 37.4495 522.873 33.1536 524.029 29.5747C524.306 28.7177 525.755 27.2337 526.365 26.0027C533.29 25.0027 540.189 23.7557 547.043 22.2547C563.853 41.0847 585.065 54.8007 608.435 62.6847C607.41 63.0687 606.395 63.4877 605.408 63.9817C603.63 64.8687 602.662 67.0417 602.616 68.9707L602.591 70.0067L602.592 70.1876C602.645 71.9517 604.055 74.138 605.86 74.4087C609.538 74.9587 610.813 73.9092 612.965 72.1378C613.427 71.758 613.928 71.3451 614.502 70.9077C617.659 68.5035 621.35 68.19 625.167 68.2905L625.958 68.3167C628.185 68.4037 630.355 68.5467 632.487 68.5907C634.388 68.8427 635.674 68.9117 635.149 68.5757C636.969 68.5157 638.766 68.3287 640.55 67.9097C871.798 90.6967 826.557 502.485 877.086 673.303C879.593 690.117 884.225 712.185 889.367 736.676C904.439 808.472 923.883 901.092 906.942 943.252C904.395 946.355 903.591 949.7 903.166 953.919C903.088 957.102 901.733 962.624 900.261 968.631C897.591 979.519 894.532 991.997 897.967 995.02C875.648 1014.18 846.574 1021.7 817.992 1022.73C816.885 1022.79 816.654 1024.35 817.73 1024.71C843.595 1032.88 872.606 1026.57 895.692 1013.03C888.082 1047.28 885.524 1083.44 869.405 1115.07C868.805 1116.14 868.098 1117.46 867.3 1118.96C861.979 1128.95 852.595 1146.56 843.433 1145.08C837.961 1143.8 833 1147.12 832.927 1152.53C826.927 1155.96 820.227 1155.49 813.779 1153.83L812.939 1153.6C822.729 1127.66 827.759 1100.23 835 1073.54C835.118 1071.96 836.841 1067.99 838.765 1063.55C842.144 1055.75 846.145 1046.52 843.184 1046.29C827.421 1053.66 819.318 1088.06 816.824 1105.31L816.678 1106.35C820.076 1067.28 817.716 1028.29 811.202 989.939C814.822 991.145 818.812 991.696 822.538 992.136L825.653 992.499C833.578 993.446 841.585 993.179 849.506 992.378C857.409 991.578 865.209 990.155 872.912 988.181C880.245 986.3 887.303 984.39 892.053 977.985C893.548 975.968 891.974 972.63 889.728 972.125C883.868 970.807 878.467 972.449 872.95 974.125C872.097 974.385 871.241 974.645 870.38 974.895L869.413 975.171C862.035 977.229 854.501 978.798 846.956 980.054C839.586 981.28 832.145 981.986 824.733 982.871C820.081 983.426 814.962 983.392 810.223 984.357C806.254 962.376 800.945 940.61 794.585 919.16C795.773 918.735 796.941 918.163 798.066 917.496C807.136 923.757 816.168 928.385 825.229 934.33C833.47 939.431 845.795 944.382 851.309 932.666C858.652 915.692 833.142 897.904 819.934 892.645C832.59 888.328 885.249 859.444 863.988 843.057C858.627 839.458 851.671 841.003 845.898 842.495L845.063 842.716C835.6 845.276 826.493 849.752 818.6 855.823C813.465 858.099 808.666 862.169 804.643 865.923L803.385 867.097C799.571 870.657 795.474 874.562 792.422 878.908C790.594 878.962 788.739 879.323 786.87 880.003C832.738 662.367 798.15 435.532 745.506 222.432C745.277 221.631 743.949 221.745 744.029 222.637C748.581 261.546 753.826 300.614 759.085 339.783C783.224 519.575 807.651 701.508 766.548 880.133L766.189 880.282C762.435 881.763 758.653 883.169 754.843 884.492C746.941 887.236 738.887 889.543 731.081 892.56C730.528 892.774 730.55 893.733 731.23 893.693C731.615 893.67 731.998 893.63 732.382 893.602C710.356 900.946 711.691 902.377 760.573 896.007L763.625 895.608C763.563 896.33 763.471 897.091 763.377 897.875C762.858 902.204 762.259 907.205 765.913 909.91C754.283 913.435 742.088 914.408 730.37 917.38C729.809 917.527 729.77 918.462 730.37 918.584C746.109 921.347 762.13 918.203 777.633 914.824L781.925 913.885C820.396 1047.14 798.679 1149.07 772.226 1273.22C769.064 1288.06 765.835 1303.22 762.632 1318.78C747.393 1403.69 738.785 1489.71 730.866 1575.63L729.262 1593.11C711.531 1772.52 718.925 1956.06 671.725 2131.16C668.147 2141.56 665.728 2152.23 666.657 2163.35C666.586 2170.86 675.81 2172.42 679.584 2166.94C681.876 2163.61 684.397 2160.34 686.328 2156.77C709.547 2193 753.228 2204.16 788.971 2222.76C809.893 2233.65 829.908 2246.63 848.419 2261.41C850.142 2262.88 851.934 2264.39 853.779 2265.95C882.512 2290.22 924.039 2325.29 913.194 2365.89C901.321 2394.44 852.806 2395.23 817.111 2395.81C808.016 2395.96 799.753 2396.1 793.14 2396.68C718.912 2397.28 644.194 2389.99 572.369 2370.28C570.445 2364.56 562.423 2364.48 557.347 2362.98C557.323 2362.94 557.301 2362.91 557.28 2362.87L557.168 2362.68C561.291 2353.11 548.31 2351.28 544.951 2359.85C492.362 2347.92 462.006 2291.57 486.582 2240.95C487.69 2238.48 496.809 2219.61 500.766 2224.49C502.24 2225.54 502.236 2222.89 501.87 2222.15C521.572 2229.36 542.137 2225.4 560.827 2217.66L562.043 2217.15C527.511 2249.16 541.58 2316.12 552.077 2295.32C551.365 2267.37 554.239 2238.66 568.382 2214.09C593.771 2202.69 620.583 2180.58 648.459 2179.42C651.875 2189.62 656.514 2199.65 662.366 2208.69C668.353 2217.94 674.052 2228.17 683.795 2233.74C686.77 2235.44 690.78 2232.61 689.717 2229.07C686.478 2218.29 678.564 2210.72 671.949 2202.07L671.106 2200.98C664.879 2193 657.728 2185.55 650.377 2178.71C656.173 2175.6 657.728 2165.13 651.03 2160.68C641.598 2155.34 625.202 2163.01 613.736 2168.38C612.042 2169.17 610.456 2169.91 609.016 2170.55L608.003 2171C600.969 2174.72 593.931 2178.95 586.826 2183.22C560.872 2198.84 534.021 2214.99 503.151 2208.6C503.668 2202.8 499.389 2195.17 495.355 2187.98C493.046 2183.86 490.818 2179.88 489.614 2176.48C484.54 2165.81 479.773 2154.98 475.367 2144C417.673 2012.95 435.491 1892.37 453.141 1772.93C467.223 1677.63 481.198 1583.06 456.635 1484.47C482.67 1380.08 521.584 1279.7 561.921 1180.37L565.667 1171.16C566.06 1170.22 564.835 1169.41 564.291 1170.34C490.273 1295.54 446.226 1436.85 416.719 1579.41C387.433 1722.76 371.149 1869.73 323.078 2008.35C299.889 2075.67 268.806 2140.51 227.366 2198.03C225.421 2202.42 223.706 2207.7 223.328 2212.48C201.879 2218.93 179.314 2219.13 156.796 2219.32C127.553 2219.57 98.3886 2219.82 71.8455 2233.76C71.7977 2232.93 71.8575 2232.04 71.9179 2231.15C72.0228 2229.6 72.1291 2228.03 71.6705 2226.68C71.9475 2224.8 71.4995 2222.74 70.0375 2220.94C62.1675 2211.23 54.7925 2200.6 50.6145 2188.62C46.0775 2175.62 43.9565 2161.93 42.9785 2148.2C37.5165 2042.85 52.8055 1937.3 74.4105 1834.54C104.377 1697 152.304 1563.51 167.355 1422.79C171.419 1388.05 173.886 1353.19 174.392 1318.2C174.518 1309.64 174.402 1300.99 174.285 1292.32C173.935 1266.27 173.581 1239.93 179.744 1214.76C198.336 1224.52 219.996 1225 240.984 1225.46C246.397 1225.58 251.766 1225.7 257.025 1225.97C257.984 1225.91 259.602 1225.89 261.651 1225.85C266.658 1225.78 274.234 1225.67 281.017 1224.85L281.983 1224.72C290.089 1225.42 298.138 1224.89 306.113 1223.26L306.659 1223.65C307.372 1223.37 308.035 1223.06 308.665 1222.72L308.956 1222.64C310.372 1222.24 311.326 1221.41 311.885 1220.39C318.692 1213.95 318.355 1202.21 317.485 1192.83L317.323 1191.15C316.721 1176.53 315.983 1161.97 314.647 1147.36C318.084 1148.44 321.411 1146.81 324.779 1145.16C327.468 1143.84 330.183 1142.51 333 1142.53C336.26 1142.22 338.204 1140.57 339.407 1137.53C349.305 1112.55 342.218 1083.42 324.652 1064.01C316.981 1055.83 307.855 1048.48 300.44 1039.9C300.139 1037.65 299.618 1035.48 299.097 1033.32C298.231 1029.71 297.368 1026.12 297.525 1022.19C297.55 1021.57 297.906 1019.3 298.114 1016.93L298.161 1016.36C303.671 1013.4 309.141 1009.88 309.121 1004.94C311.82 996.913 299.779 994.808 295.606 999.632C308.23 974.772 317.503 947.978 322.849 920.495C401.997 959.464 493.583 952.808 579.064 945.201L589.715 944.249C595.09 943.213 593.645 934.806 588.457 934.713C500.007 942.009 408.589 948.272 323.55 916.77C324.755 910.161 325.789 903.501 326.568 896.816C346.33 899.52 365.788 904.057 385.378 907.819C450.558 919.093 517.12 920.965 582.946 915.353C601.307 913.763 619.611 911.527 637.837 908.761C644.161 907.799 650.406 907.772 655.128 902.882C661.844 892.556 646.454 890.787 639.594 893.011C558.305 907.042 475.28 907.365 393.438 898.405C386.732 897.857 380.014 896.971 373.287 896.084C357.844 894.048 342.361 892.007 326.878 894.038C328.563 836.336 324.689 778.684 320.81 720.968C316.225 652.753 311.636 584.476 316.224 515.985C316.672 483.283 319.07 450.604 320.732 417.928C320.974 416.987 321.211 416.046 321.461 415.11C323.241 408.497 325.18 401.857 327.902 395.58C330.641 389.265 334.849 383.735 337.06 377.218C337.821 374.969 334.945 372.597 332.996 374.016C327.649 377.907 324.578 383.962 321.909 390.006C322.103 383.815 322.245 377.622 322.312 371.43C322.293 370.245 320.602 369.985 320.285 371.149C315.571 388.521 312.982 406.621 310.594 424.552L309.323 434.137C295.626 539.289 295.162 645.987 302.385 751.699L302.683 754.788C309.713 827.659 317.066 903.88 286.263 972.444C285.249 975.655 283.588 978.813 281.921 981.982C278.245 988.974 274.542 996.014 277.699 1003.77C278.522 1006.55 281.278 1008.37 284.076 1007.78C258.103 1024.56 228.282 1032.41 197.975 1034.84L195.267 1035C184.811 1035.55 174.526 1034.94 164.155 1034.18L161.189 1033.97C101.861 879.793 87.5135 713.275 92.9535 548.828C96.0305 424.497 99.6445 297.377 133.813 177.286C162.523 98.9727 277.535 101.274 352.159 53.5527C352.288 53.7987 352.425 54.0287 352.576 54.2337C353.782 55.8677 355.442 57.1757 357.214 58.1077C361.482 60.3517 366.518 60.0397 369.242 55.7767C370.777 53.3757 369.173 50.3827 366.777 49.5647C364.811 48.8937 362.799 49.4607 361.456 47.9857C361.406 47.932 361.36 47.8767 361.315 47.8203L361.052 47.4757ZM514.151 27.4787C515.254 27.3657 516.359 27.2747 517.462 27.1497L517.562 29.5367C517.52 29.6957 517.481 29.8547 517.444 30.0137C516.456 28.9557 515.364 28.0867 514.151 27.4787ZM379.062 73.296L378.98 73.0389C378.51 71.4945 376.828 65.0405 378.672 66.667C380.62 69.471 384.085 72.354 386.521 74.777C394.824 83.759 406.566 87.82 418.002 90.74C420.529 91.435 420.913 95.975 418.002 96.393C408.443 97.764 400.067 94.738 392.356 88.926C386.894 84.83 381.987 79.607 379.062 73.296ZM600.673 80.8414C600.846 80.5214 600.406 80.1304 600.158 80.4344C592.503 89.8254 583.389 95.7004 571.906 98.9304C568.202 99.9714 569.945 106.117 573.476 104.768C584.806 100.445 594.811 91.6824 600.673 80.8414ZM192.929 455.733L193.07 456.329C195.448 466.871 191.667 476.971 187.896 487.043C185.851 492.505 183.809 497.96 182.754 503.472C178.443 518.983 175.45 534.823 173.387 550.806C169.273 582.669 168.25 616.434 176.82 647.601C177.734 650.923 182.932 650.366 182.805 646.771L182.647 643.759C180.084 594.555 178.229 544.89 190.522 496.735C191.15 494.02 191.976 491.17 192.825 488.242C195.998 477.299 199.483 465.28 194.043 455.252C193.713 454.642 192.707 455.051 192.929 455.733ZM581.141 517.277C578.713 517.302 576.63 518.962 575.708 521.199C575.322 522.138 575.155 523.112 575.104 524.132C575.021 525.839 576.151 527.382 577.781 527.767C579.323 528.131 580.802 527.384 581.591 526.015C581.753 525.733 581.869 525.425 582.005 525.13C582.053 525.027 582.11 524.924 582.161 524.821L582.242 524.639L582.253 524.6C582.726 524.066 583.008 523.369 583.078 522.659C583.737 522.093 584.182 521.271 584.141 520.354C584.068 518.7 582.823 517.261 581.141 517.277ZM384.192 566.175C384.113 565.199 385.67 564.997 385.85 565.944C390.939 592.794 393.873 620.152 395.977 647.405L396.042 648.493C396.075 649.025 396.12 649.71 396.174 650.532C397.347 668.372 402.743 750.493 389.503 728.995C389.284 715.721 389.208 702.442 389.133 689.163C388.899 648.121 388.665 607.078 384.192 566.175ZM803.297 878.194C817.263 864.622 835.665 853.226 855.214 853.078C842.911 865.233 827.299 873.243 811.136 878.384C808.251 879.79 806.707 882.007 804.591 884.314C803.519 883.133 802.294 882.113 800.961 881.275C801.75 880.261 802.526 879.231 803.297 878.194ZM786.57 884.861C787.701 884.601 788.859 884.534 790.005 884.63C790.544 887.329 794.178 889.002 796.147 886.908C798.631 888.679 800.474 891.359 800.891 894.626C802.096 900.841 797.816 907.231 791.878 908.496C789.938 900.651 788.128 892.779 786.57 884.861ZM809.13 893.085C810.417 898.548 809.514 904.368 806.63 909.167C811.545 912.124 816.393 915.194 821.228 918.284L823.644 919.83C824.126 920.136 824.861 920.667 825.768 921.323C830.936 925.059 841.705 932.844 843.25 926.242C844.092 916.18 830.841 906.004 821.268 898.653C818.948 896.871 816.844 895.255 815.209 893.848C813.112 894.038 811.185 893.688 809.13 893.085ZM780.073 904.173C779.873 904.645 779.665 905.114 779.453 905.582C779.727 905.471 780 905.362 780.272 905.256L780.073 904.173ZM248.119 993.792C245.966 994.225 243.83 994.654 241.725 994.994C231.98 996.567 222.199 997.914 212.368 998.778C202.89 999.61 193.366 1000.17 183.85 1000.01C180.833 999.957 177.798 999.835 174.757 999.713C168.35 999.456 161.918 999.198 155.574 999.597C154.769 999.648 154.265 1000.88 155.125 1001.3C171.245 1009.12 191.595 1008.56 209.172 1007.24L211.416 1007.06C221.014 1006.3 230.571 1005.07 240.095 1003.65L240.717 1003.55C249.885 1002.23 260.573 1001.82 268.707 997.131C270.539 996.075 270.367 992.603 268.08 992.213C261.534 991.096 254.746 992.46 248.119 993.792ZM252.577 1037.44C264.455 1033.67 275.911 1028.69 286.564 1022.83C287.115 1025.13 287.842 1027.36 288.713 1029.53C288.976 1035.34 290.96 1041.04 295.751 1044.37C296.245 1044.71 296.814 1044.85 297.385 1044.83C300.926 1049.8 304.933 1054.61 308.954 1059.43C324.935 1078.61 341.137 1098.05 329.149 1128.76C323.553 1128.76 318.207 1129.81 313.125 1132.63C306.034 1068.13 302.772 1139.48 302.263 1160.24L302.223 1162.01C301.897 1169.03 301.983 1176.1 302.07 1183.18C302.156 1190.23 302.241 1197.26 301.918 1204.22C301.864 1204.52 301.732 1204.89 301.586 1205.26C296.993 1207.58 292.319 1209.73 287.549 1211.64C287.203 1211.78 286.845 1211.91 286.487 1212.04C279.337 1210.86 270.436 1211.04 264.972 1210.4C257.933 1209.92 250.318 1209.98 242.49 1210.05C222.084 1210.24 200.352 1210.44 184.066 1200.88C184.948 1198.54 185.895 1196.22 186.924 1193.93C186.585 1190.14 184.068 1195.36 182.762 1198.07C182.513 1198.59 182.307 1199.02 182.17 1199.27L182.076 1199.43C171.111 1190.99 166.33 1176.4 162.605 1163.19L161.626 1159.68C154.819 1136.16 147.585 1109.36 149.43 1084.29C151.318 1081.2 153.169 1078.08 154.743 1074.83C157.07 1070.03 158.692 1064.75 160.19 1059.58L160.843 1057.31C161.545 1054.91 163.34 1049.36 163.802 1044.39C175.277 1048.59 189.222 1047.51 200.727 1046.37L205.489 1045.88C208.935 1045.53 212.381 1045.15 215.823 1044.74C222.079 1044.26 228.324 1043.38 234.508 1042.13C240.591 1041.17 246.939 1039.98 252.577 1037.44ZM815.595 1119.81L815.367 1122.26C815.211 1123.91 815.049 1125.56 814.879 1127.2C815.12 1125.23 815.311 1123.25 815.477 1121.27L815.595 1119.81ZM707.716 1168.31C707.847 1167.64 708.817 1167.93 708.71 1168.59C705.67 1190.61 703.168 1212.76 699.363 1234.68C686.535 1310.96 675.45 1387.72 658.987 1463.29C658.17 1466.76 652.376 1466.05 652.817 1462.43C663.855 1382.79 680.804 1304.11 695.407 1225.1C699.218 1206.11 704.032 1187.3 707.716 1168.31ZM284.897 1277.99C284.82 1277.26 283.838 1277.04 283.608 1277.81C270.972 1350.59 263.294 1424.61 257.546 1498.32C256.365 1519.39 255.287 1540.47 254.738 1561.57C254.639 1565.37 260.746 1566.4 261.368 1562.49C274.343 1479.08 280.332 1394.93 284.299 1310.63L284.352 1309.49C284.459 1307.29 284.594 1305.07 284.73 1302.83C285.234 1294.54 285.752 1286.03 284.897 1277.99ZM588.864 1593.47C588.857 1592.14 590.697 1592.21 590.833 1593.47C593.923 1622.14 592.014 1651.09 585.564 1679.14C585.031 1681.46 581.742 1680.44 582.129 1678.17C586.889 1650.17 589.007 1621.88 588.864 1593.47ZM184.04 1923.48C197.435 1868.1 212.899 1806.5 218.185 1752.46C205.958 1809.21 193.13 1865.81 180.153 1922.38C179.56 1924.96 183.371 1926.06 184.04 1923.48ZM581.477 1897.74C581.795 1896.07 584.145 1896.82 583.917 1898.43C580.951 1919.45 580.711 1940.72 581.731 1961.91C572.254 1976.18 579.291 1901.01 581.477 1897.74ZM188.721 2067.31C189.34 2066.17 191.157 2066.95 190.778 2068.2C177.668 2110.63 166.441 2153.66 156.712 2197.03C151.041 2226.65 132.473 2217.7 140.792 2191.53C151.432 2148.23 167.728 2106.41 188.721 2067.31ZM523.091 2079.98C522.797 2079.04 521.287 2079.15 521.342 2080.22C522.848 2109.32 532.752 2137.18 547.755 2161.8L548.016 2162.23C552.722 2170.03 557.991 2179.82 566.365 2183.85C569.678 2185.44 573.979 2182.8 572.838 2178.75C570.408 2170.13 563.504 2163.48 558.568 2156.31C542.732 2133.14 531.452 2106.87 523.091 2079.98ZM240.679 2137.63C241.789 2136.21 243.797 2138.04 243.034 2139.5L242.686 2140.2C242.533 2140.52 242.348 2140.9 242.134 2141.34C237.394 2151.12 218.263 2190.58 215.549 2173.97C221.029 2160.34 231.774 2149.06 240.679 2137.63ZM674.248 2171.38C674.792 2171.38 674.792 2170.52 674.248 2170.52C673.705 2170.52 673.704 2171.38 674.248 2171.38ZM618.978 2188.38C619.164 2187.57 620.44 2187.54 620.605 2188.38C624.971 2202.77 626.254 2217.97 629.641 2232.63C629.803 2234.98 631.013 2238.82 632.384 2243.17C635.899 2254.33 640.479 2268.87 631.227 2270.29C621.694 2270.44 619.312 2252.03 617.756 2239.99C617.364 2236.96 617.025 2234.34 616.637 2232.52L616.465 2230.94C614.951 2216.77 614.2 2201.95 618.978 2188.38ZM224.543 2226.38C201.28 2231.6 177.438 2230.69 153.769 2229.78C150.5 2229.65 147.234 2229.53 143.973 2229.42C135.57 2245.7 130.251 2263.65 126.159 2281.48C122.101 2308.74 106.519 2300.44 115.564 2277.55C121.218 2259.77 130.908 2243.85 142.163 2229.36L139.938 2229.29C116.932 2228.64 93.6618 2229.06 71.7255 2236.41C71.2725 2278.8 49.7725 2315.12 27.4345 2349.27C9.36548 2381.07 19.2365 2432.42 57.4015 2442.27C110.271 2459.91 166.157 2460.78 221.049 2464.05C222.332 2458.49 228.655 2456.41 233.719 2457.04C247.878 2459.53 262.456 2451.8 270.739 2440.15C294.795 2401.48 272.199 2355.86 251.459 2313.98C243.24 2297.39 235.311 2281.38 230.694 2266.62L230.298 2265.67C229.857 2264.61 229.368 2263.49 228.853 2262.3C224.18 2251.53 217.335 2235.75 224.543 2226.38ZM128.202 2231.66C128.806 2231.66 128.806 2230.7 128.202 2230.7C127.599 2230.7 127.598 2231.66 128.202 2231.66ZM166.811 2241.82C166.828 2241.25 166.029 2241.03 165.762 2241.53C159.212 2253.72 162.013 2271.97 169.788 2282.82C172.484 2286.58 178.654 2283.1 176.022 2279.08C172.402 2273.56 169.384 2267.93 167.78 2261.44C166.315 2255.52 166.51 2250.16 166.724 2244.33C166.754 2243.5 166.785 2242.67 166.811 2241.82ZM781.55 2322.12C768.175 2323.1 765.133 2293.32 772.567 2301.52C773.437 2304.65 774.943 2307.91 776.993 2310.45L777.48 2311.03C777.941 2311.56 778.608 2312.2 779.342 2312.91C782.557 2316.01 787.088 2320.39 781.55 2322.12Z"
      transform="translate(273 10.34073)"
      fill={strokeColor || '#000000'}
      fillRule="evenodd"
      stroke="none"
    />
  </g>
);
