import React from 'react';
// @ts-ignore
import { PieceType } from '../../types.tsx';

export const SportyShirt: React.FC<PieceType> = ({ strokeColor, backgroundColor }) => (
  <g transform="translate(0 459)">
    <path
      d="M90.1405 744.167C102.112 744.906 114.082 745.491 126.051 745.937C282.582 751.769 438.986 733.925 595.419 730.021C649.896 728.587 704.094 729.303 758.432 733.677C763.755 734.105 769.843 728.377 769.19 722.919C759.151 636.265 746.591 549.841 740.083 462.831C740.078 458.229 740.672 453.634 742.253 449.298C742.552 448.958 744.098 445.146 745.473 444.91C745.023 445.242 747.059 444.658 745.763 444.758C753.619 443.472 761.323 434.992 755.622 426.877C696.891 336.86 616.716 254.7 590.922 147.782C584.828 118.876 562.816 117.089 539.367 105.164C532.05 100.813 514.16 88.7586 511.247 80.3786C504.293 50.1756 516.541 20.5866 480.758 8.36563C457.135 1.81663 415.384 -3.72437 391.483 3.18263C362.328 12.8856 364.509 45.7396 347.599 68.3426C338.852 81.4163 323.942 99.3164 310.174 101.32C303.501 102.29 298.586 88.7926 291.924 89.7216C188.07 114.945 46.5755 287.011 1.93951 382.261C-8.11949 412.238 24.3212 403.194 22.3282 433.324C19.8712 490.485 14.4975 563.661 17.6845 620.89C20.6695 654.106 18.4605 688.909 28.7855 720.876C26.0065 724.25 29.9995 727.659 33.2575 729.125C37.3625 736.106 77.7545 743.2 90.1405 744.167Z"
      transform="translate(24.16519 -32.42623)"
      fill={backgroundColor || '#FFFFFF'}
      stroke="none"
    />
    <path
      d="M370.683 6.91679C373.383 -5.23221 392.713 -0.0222141 389.403 12.0768C384.273 30.7878 373.633 48.4678 358.614 60.8778C347.013 70.4578 331.204 79.0068 315.523 80.5868C316.993 82.0178 318.403 83.5478 319.883 85.0068C323.223 88.3268 326.773 91.4068 330.433 94.3668C337.954 100.447 345.773 105.917 354.313 110.497C388.423 128.798 426.954 133.018 465.053 128.757C483.133 126.737 501.483 123.308 518.483 116.697C526.364 113.638 534.023 109.617 540.784 104.538L542.553 103.21C546.108 100.526 550.851 96.7384 553.073 92.5978C546.313 94.1168 537.763 86.9168 533.073 82.7278C527.944 78.1278 523.623 72.1968 520.433 66.1168C514.183 54.1878 510.873 38.7978 516.114 26.0068C516.463 25.1568 517.583 25.2978 517.683 26.2178C519.233 41.1278 523.253 55.1078 533.954 66.1478C538.704 71.0378 544.393 75.1378 550.603 77.9868L551.477 78.3883C554.123 79.6122 556.908 81.0478 558.023 83.6668C558.454 83.6168 558.883 83.6568 559.293 83.7678C559.663 83.8668 560.003 83.9778 560.333 84.0978C559.593 82.6478 559.204 80.9378 559.273 78.9168C559.534 71.0868 570.284 70.8478 571.773 77.8173C571.503 76.8978 571.143 77.7878 571.823 78.0678C571.85 78.1938 571.872 78.3251 571.887 78.4576L571.901 78.632L571.892 78.486C571.883 78.3781 571.87 78.2815 571.856 78.1936L571.834 78.0673C571.933 78.1168 572.073 78.1478 572.233 78.1478L572.299 78.1738C572.55 78.2818 573.433 78.6938 573.694 78.7978C575.483 79.4578 577.483 79.6668 579.313 80.2368C583.284 81.4578 586.784 83.4778 589.204 86.9168C590.944 89.3878 591.913 92.2178 592.313 95.1568C609.883 103.608 626.513 114.587 640.444 128.178C671.534 158.497 693.213 196.447 711.003 235.728C720.058 255.725 728.126 276.147 736.018 296.624L737.263 299.858C745.723 321.867 753.204 344.117 755.043 367.778C755.213 369.898 754.513 371.888 753.303 373.538C753.733 375.318 753.954 377.098 753.893 378.837C753.883 379.108 753.864 379.378 753.843 379.648C756.683 379.598 759.463 380.788 762.103 384.128C763.173 383.788 764.333 383.747 765.473 384.117C772.423 386.337 773.543 393.968 774.853 400.358C776.204 406.958 776.793 413.718 776.803 420.447C776.803 422.858 775.423 425.898 773.083 426.928C768.683 428.867 763.944 430.138 759.393 431.898C755.973 433.218 752.543 434.468 749.083 435.638C751.003 438.987 751.623 443.648 752.663 447.178C754.293 452.688 755.603 458.218 756.704 463.858C764.163 502.208 769.333 540.968 776.313 579.398C779.803 598.648 783.864 617.768 788.003 636.888C790.043 646.288 792.213 655.667 794.543 665.007C795.784 669.987 797.073 674.968 798.403 679.917C798.79 681.363 799.181 682.806 799.576 684.246L800.273 686.768C801.793 687.608 803.093 688.878 803.993 690.617C807.284 696.978 805.393 704.148 799.083 707.728C792.223 711.628 784.034 707.947 780.253 701.617C777.593 697.148 776.723 691.228 775.413 686.257C773.933 680.678 772.523 675.068 771.163 669.458C761.924 631.345 755.737 592.565 751.074 553.638L750.743 550.858C748.373 530.818 746.083 510.728 744.603 490.598C743.873 480.708 743.293 470.818 742.933 460.907C742.753 455.808 743.043 450.678 743.333 445.587C743.463 443.358 743.653 441.117 743.723 438.888L743.746 438.57C743.764 438.344 743.79 438.047 743.811 437.735L743.833 437.358C736.933 439.518 729.933 441.318 722.864 442.837C707.823 446.087 692.433 447.898 677.083 446.978C679.223 472.398 682.013 497.757 685.913 522.947C689.673 547.208 694.013 571.417 698.913 595.478C701.364 607.568 704.013 619.628 706.803 631.648C708.303 638.068 710.013 644.447 711.364 650.898C712.163 654.737 712.413 657.947 710.803 661.538C712.576 666.365 714.15 671.217 715.699 675.786L716.163 677.148C716.671 678.63 717.263 680.119 717.856 681.61C720.465 688.168 723.097 694.783 718.673 701.188C715.864 705.247 711.284 707.568 706.673 707.708C706.593 707.757 706.503 707.818 706.413 707.867C703.933 709.197 701.073 709.458 698.353 708.888C694.223 709.697 690.083 710.478 685.933 711.188C675.683 712.958 665.383 714.417 655.063 715.648C635.413 717.987 615.633 719.268 595.864 719.978C556.11 721.411 516.333 720.675 476.553 719.939C443.904 719.336 411.254 718.732 378.614 719.327C341.723 719.997 304.833 721.657 268.003 723.858C249.623 724.958 231.233 726.138 212.843 727.048L207.151 727.325C190.705 728.111 174.247 728.719 157.813 727.518C157.493 727.497 157.243 727.367 157.073 727.188C151.403 726.548 145.704 721.327 146.273 715.298C148.723 689.617 151.173 663.938 153.633 638.247C158.003 592.478 162.413 546.708 166.873 500.947L167.518 494.341C169.016 478.922 170.447 463.466 171.173 447.987C167.513 447.728 163.864 447.398 160.213 446.997C120.658 442.666 82.7377 430.703 46.3283 414.987L44.8531 414.348C41.5731 412.917 37.9831 411.487 34.3031 409.958C34.3393 414.107 34.2726 418.26 34.2061 422.398C34.1607 425.23 34.1153 428.055 34.1031 430.867C34.0681 438.912 34.1017 446.957 34.1353 454.999C34.1497 458.442 34.1641 461.885 34.1731 465.327C34.2431 488.987 35.1431 512.657 36.3231 536.278C38.3931 577.997 40.8231 619.657 44.5031 661.277C45.4331 671.747 46.6941 682.197 47.5831 692.667C48.1141 698.837 46.8431 703.978 41.1941 707.218C38.4131 708.818 36.2631 708.148 33.5031 706.858C26.7631 703.697 26.5731 696.228 25.9331 689.728C25.4441 684.827 24.9931 679.928 24.5531 675.018C23.6141 664.548 22.8031 654.077 22.1431 643.587C19.5341 601.907 18.7731 560.268 20.5731 518.538C21.4088 499.019 22.6153 479.457 24.2166 459.973L24.5931 455.478C25.9131 439.907 26.7631 423.568 29.4931 407.898C18.4831 403.018 7.5731 396.808 2.5131 386.487C-4.0459 373.087 3.1631 361.628 13.4331 353.737C13.3331 352.407 13.4331 351.087 13.7131 349.888C16.6631 337.117 21.6031 324.497 26.3731 312.318C31.1831 300.077 36.4931 288.028 42.3331 276.237C65.7731 229.007 97.7931 185.848 135.963 149.487C154.923 131.428 175.673 114.737 197.823 100.737C208.803 93.8078 220.063 87.4068 231.723 81.7078L233.447 80.8683C241.564 76.9293 250.668 72.7411 259.694 70.5478C260.633 69.8478 261.583 69.1878 262.543 68.5578C266.093 66.1968 270.913 67.9068 273.013 71.2768C274.034 70.4868 275.213 69.7878 276.563 69.1568L277.897 68.5478C285.997 64.901 295.722 61.4909 304.513 63.8878C309.973 65.3778 314.273 69.3978 316.204 74.5178C320.633 72.1778 324.983 69.7678 329.233 66.8178C336.063 62.0978 342.253 56.2368 347.813 50.0868C358.963 37.7178 367.063 23.2278 370.683 6.91679ZM571.834 78.0673L571.823 78.0678C571.813 77.9866 571.794 77.897 571.773 77.8173L571.793 77.891L571.834 78.0673ZM287.704 75.8778C294.753 72.8778 305.923 70.6478 311.763 76.8268C311.633 76.8978 311.503 76.9678 311.373 77.0268C310.903 76.6878 310.423 76.3668 309.923 76.0678C309.563 75.8478 309.153 76.2078 309.233 76.5978C309.333 77.0578 309.454 77.5068 309.593 77.9678C308.763 78.3978 307.933 78.8368 307.103 79.2768C306.364 79.6668 306.763 80.7178 307.503 80.7568C308.553 80.8268 309.603 80.8578 310.663 80.8478C313.445 87.0296 318.855 92.7238 323.504 97.4346L324.873 98.8178C331.313 105.327 338.923 110.917 346.643 115.818C363.483 126.518 382.773 133.388 402.343 137.018C424.833 141.188 447.983 141.438 470.643 138.617C490.614 136.138 510.673 132.218 529.114 123.928C538.803 119.577 547.963 113.757 555.573 106.308C559.204 102.757 566.233 94.2978 564.913 88.6078C566.553 89.5268 568.444 90.1778 570.423 90.6378C575.253 91.7568 579.983 92.0868 580.353 97.8778C581.135 109.919 569.989 121.68 561.869 129.805L560.035 131.63C539.897 151.406 513.509 163.464 486.153 169.438C429.153 181.898 363.673 168.777 318.093 131.577C305.223 121.068 293.954 108.628 285.393 94.3368C283.393 91.0068 281.293 87.5378 279.784 83.9468C278.624 81.2203 278.612 80.4071 280.988 79.0388L281.383 78.8178C283.423 77.7078 285.573 76.7878 287.704 75.8778ZM29.9931 352.507C28.6431 356.888 26.5731 360.978 21.8531 361.968C20.1831 362.318 18.7841 362.128 17.6231 361.558L17.3447 362.119C13.4639 370.085 12.3242 378.492 21.2531 384.628C25.2841 387.398 29.6731 389.798 34.2131 391.947C42.3318 395.81 50.9779 398.916 59.1297 402.075L60.7531 402.708C75.3331 408.428 90.1431 413.638 105.183 417.997C120.444 422.407 135.973 425.947 151.694 428.197C158.323 429.138 165.003 429.798 171.694 430.228C171.791 422.232 171.762 414.229 171.734 406.231C171.73 405.227 171.726 404.222 171.723 403.218C169.343 402.917 166.983 402.598 164.704 402.327C157.763 401.518 150.843 400.528 143.963 399.298C129.593 396.728 115.373 393.178 101.503 388.638C75.8031 380.208 51.8931 368.157 29.9931 352.507ZM755.198 397.119C756.023 397.217 756.818 397.136 757.573 396.917C758.183 399.178 759.034 401.438 759.534 403.638C760.493 407.798 761.153 411.928 761.513 416.138L759.959 417.022C758.142 418.053 756.304 419.071 754.343 419.928C750.403 421.648 746.413 423.247 742.393 424.757C734.723 427.638 726.963 430.308 719.093 432.587C708.609 435.625 697.994 438.123 687.368 440.561L676.743 442.997C675.973 433.587 675.284 424.167 674.663 414.737C680.043 416.268 686.213 416.507 691.413 416.407C699.183 416.247 707.133 415.247 714.713 413.538C722.463 411.788 730.013 409.398 737.323 406.288C741.034 404.697 744.683 403.007 748.253 401.128C749.784 400.327 751.293 399.497 752.793 398.638L752.855 398.604C753.078 398.489 753.461 398.34 753.871 398.181C754.97 397.753 756.265 397.25 755.198 397.119Z"
      transform="translate(14.0003 -7.000386)"
      fill={strokeColor || '#000000'}
      fillRule="evenodd"
      stroke="none"
    />
  </g>
);
