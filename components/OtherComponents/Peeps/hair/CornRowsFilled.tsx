import React from 'react';
// @ts-ignore
import { PieceType } from '../types.tsx';

export const CornRowsFilled: React.FC<PieceType> = ({ strokeColor, backgroundColor }) => (
  <g>
    <path
      d="M194.698 0L203.335 10.2716C198.552 13.6418 194.038 17.0282 189.791 20.4309L189.787 20.4206C209.458 7.58646 231.243 0 254.778 0C300.106 0 392.178 38.9369 412.992 67.0222C423.321 80.9599 442.515 123.748 452.472 170.265C460.472 207.642 472.371 313.235 460.472 352.913C445.244 403.693 395.143 450.627 343.482 450.627C291.822 450.627 211.618 413.331 154.536 331.599C151.926 327.862 121.952 323.53 100.569 309.502L106.183 371.35L110.45 407.328L109.509 409.888C94.1943 451.305 82.0587 472.913 73.1017 474.71C63.962 476.545 45.3488 461.563 17.2622 429.764L13.6734 414.701C4.55781 376.275 0 355.649 0 352.823L0.00629765 352.309C0.140676 345.805 2.381 308.997 2.42717 299.091L2.42789 150.627C32.634 50.209 61.4591 0 88.9032 0L194.698 0Z"
      transform="translate(-40.6856 59.33681)"
      fill={backgroundColor || '#FFFFFF'}
      stroke="none"
    />
    <path
      d="M131.439 2.13831C140.32 -1.30169 150.609 -0.651686 159.039 4.52831C175.59 3.81831 192.05 13.4983 200.679 27.6283C200.859 27.8283 201.05 28.0283 201.22 28.2283L203.049 30.3598C204.781 32.3953 206.607 34.6387 208.054 36.9553C200.966 37.1173 195.061 40.0063 190.939 45.8413C187.998 50.0048 194.735 53.9611 197.741 50.0233L197.847 49.8793C200.322 46.3763 204.058 45.0193 208.217 44.9483C209.411 44.9283 210.317 44.4713 210.957 43.7973C211.212 44.7263 211.44 45.6653 211.649 46.6083C232.591 38.4633 255.167 36.3063 277.652 38.2383C276.666 39.8343 275.842 41.5443 275.208 43.3413C274.489 45.3783 276.023 47.7173 278.002 48.2613C280.142 48.8493 282.076 47.5951 282.851 45.657L282.922 45.4673C283.786 43.0193 285.197 40.9183 287.091 39.2893C297.676 40.7243 308.186 43.0063 318.439 45.9483C330.762 49.4873 342.969 53.8063 354.907 58.7513C352.885 59.5443 351.138 60.8843 349.915 63.1213C347.473 67.5865 354.186 71.586 356.733 67.3172L356.823 67.1593C357.073 66.7015 357.294 66.4263 357.456 66.2696L357.514 66.2163L357.866 66.0543L358.522 65.8663L358.774 65.8045C358.996 65.7544 359.088 65.7576 359.673 65.7253C360.378 65.6855 361.083 65.685 361.789 65.6845L362.009 65.6843C363.841 65.6833 365.01 64.6623 365.539 63.3563C371.43 66.0153 377.246 68.8153 382.959 71.7483L384.317 72.4514C401.951 81.6651 418.658 93.7648 428.349 111.568C428.99 112.758 429.189 114.058 429.03 115.298C431.099 117.778 433.099 120.338 435.019 122.938C440.879 130.898 445.169 139.948 449.229 148.918C457.399 166.958 462.899 185.488 467.189 204.808C471.34 223.428 474.689 242.248 477.8 261.068C481.249 281.978 484.119 303.068 484.72 324.278C485.78 362.088 478.389 400.118 457.159 431.948C438.22 460.348 409.7 482.898 375.879 490.118C341.479 497.458 305.079 490.298 277.97 467.378C273.599 463.688 274.2 456.238 277.97 452.458C282.24 448.198 288.539 448.788 292.889 452.458C318.419 474.048 355.579 477.378 386.34 466.378C414.78 456.198 437.059 432.718 450.729 406.348C467.409 374.188 470.22 337.248 467.659 301.668C466.26 282.128 463.349 262.748 460.349 243.398L458.538 231.751C456.563 219.135 454.487 206.536 451.78 194.048L451.146 191.139C447.838 176.08 443.962 160.635 437.97 146.478C434.829 139.048 431.05 131.888 427.18 124.818C426.43 123.448 425.659 122.058 424.869 120.658C423.809 121.028 422.599 121.088 421.329 120.688C410.399 117.288 399.169 115.008 387.74 114.248C382.533 113.9 377.318 113.846 372.109 114.049C363.192 113.53 354.026 114.314 345.532 117.048C344.701 116.335 343.859 115.637 343.016 114.939C342.789 114.921 342.562 114.897 342.334 114.852C340.167 114.426 338.643 112.886 337.725 110.941C337.677 110.838 337.634 110.735 337.593 110.632C336.506 109.801 335.41 108.983 334.304 108.176C331.608 108.875 329.246 106.632 328.61 104.174C328.01 103.769 327.4 103.377 326.794 102.98C326.319 103.096 325.847 103.192 325.387 103.226C323.402 103.369 321.485 103.065 319.726 102.118C317.499 100.919 316.076 98.9853 315.124 96.7883C311.756 96.9953 308.348 95.9023 305.337 93.9263C302.893 92.3233 301.021 90.1103 299.16 87.9013C276.482 77.7863 251.83 71.8143 227.12 70.2843C224.686 70.7523 222.269 71.3093 219.882 71.9573C219.317 72.1113 218.515 72.4133 217.592 72.7753C223.101 72.1093 228.681 72.0433 234.34 72.8583C261.194 76.7413 282.109 96.8473 300.11 115.826C304.392 114.961 308.72 120.506 304.757 124.178L273.86 152.809C274.618 156.011 270.946 159.167 267.729 158.398C262.335 157.102 256.932 155.842 251.525 154.603C245.885 157.332 238.794 156.865 233.678 152.909C233.44 152.725 232.923 152.431 232.474 152.139C232.054 152.486 231.489 152.834 231.264 152.982C229.445 154.186 227.229 154.54 225.104 154.202C222.918 153.855 220.945 152.746 219.244 151.365C218.161 150.486 215.638 146.815 214.234 146.545L214.16 146.536C214.885 146.695 212.002 149.37 211.213 149.934C209.325 151.281 207.238 151.989 204.889 151.731C200.795 151.281 197.275 147.55 195.273 144.105L195.122 143.84L195.059 143.676L195.006 143.854C194.996 143.885 194.985 143.919 194.971 143.956C194.671 144.767 193.729 145.689 193.089 146.256C191.265 147.869 189.007 148.578 186.595 148.157C184.553 147.802 182.837 146.569 181.457 145.076L181.242 144.838C180.834 144.378 178.144 140.764 178.569 139.898L178.618 139.825L178.484 139.797C176.848 140.199 175.475 139.796 174.469 138.953C168.855 137.723 163.314 136.29 157.95 134.468C157.53 135.648 157.119 136.828 156.72 138.018C159.649 139.828 162.359 142.408 164.849 144.248C169.57 147.728 174.289 151.208 178.999 154.698L197.661 168.464L199.795 167.891C202.522 167.159 204.862 168.747 205.863 171.173L205.945 171.383C206.342 172.446 206.82 173.429 207.382 174.37C212.047 174.184 215.997 177.048 217.274 181.156C218.426 181.13 219.59 181.174 220.78 181.305C224.039 181.663 226.236 184.083 225.646 187.406L225.601 187.634L225.522 188.004C227.411 188.806 228.781 190.355 229.085 192.697C229.591 193.458 229.999 194.286 230.26 195.208C231.38 199.139 229.789 203.833 228.403 207.924C228.102 208.812 227.811 209.672 227.559 210.489L227.45 210.848C226.543 213.86 225.605 216.858 224.656 219.854L222.291 227.293C215.735 248.025 209.343 269.884 214.649 291.618C215.78 296.218 209.899 298.298 207.349 294.698C201.167 285.982 194.488 277.769 187.475 269.885L187.135 269.831C182.224 268.844 180.317 265.375 178.063 261.839C176.735 262.23 175.307 262.322 173.927 262.056C171.929 261.671 170.139 260.53 168.726 259.089C167.529 257.867 166.432 254.733 165.017 253.956C163.982 253.388 162.335 253.627 160.723 253.861C159.579 254.027 158.453 254.191 157.575 254.061C155.856 253.808 154.251 253.218 152.694 252.477C149.832 256.378 147.935 260.964 147.47 265.908C147.289 267.788 146.729 269.378 145.919 270.698C148.899 270.588 151.889 270.798 154.84 271.348C165.76 273.378 173.59 280.118 177.99 290.158C178.179 290.598 177.609 290.958 177.349 290.538C170.82 280.488 156.609 279.978 146.289 283.518C135.329 287.278 129.179 296.928 126.99 307.938C124.59 320.008 127.669 333.018 134.24 343.298C137.289 348.078 141.45 352.438 146.979 354.198C150.303 355.256 153.499 354.821 156.718 354.383C159.86 353.955 163.024 353.525 166.349 354.478C170.929 355.788 172.95 360.218 172.119 364.648C171.789 366.388 171.179 367.908 170.359 369.228C172.78 374.028 175.019 378.968 177.869 383.508C182.269 390.518 187.59 396.318 193.389 402.168C199.379 408.208 205.479 414.128 211.889 419.728C218.03 425.098 225.07 428.918 231.51 433.838C236.03 437.288 238.269 442.128 236.039 447.668C234.2 452.248 227.999 456.148 222.979 454.078C213.369 450.118 204.959 443.378 197.3 436.438C190.2 429.998 184.019 422.298 179.349 413.938C174.944 406.057 171.698 397.106 168.959 388.484L168.619 387.408C167.329 383.308 165.97 378.698 165.09 374.048C159.82 376.928 152.669 377.348 147.03 376.568C137.919 375.318 129.609 370.728 123.329 364.038C120.402 360.925 117.815 357.374 115.581 353.525C115.784 355.868 115.905 358.135 116.035 360.198C121.256 365.916 123.35 374.168 121.497 381.697C125.865 386.193 127.089 392.942 124.809 398.688C129.59 403.43 129.41 410.976 127.343 417.829C132.995 424.146 133.53 433.987 129.117 441.115L128.984 441.627C133.44 449.083 132.435 458.719 126.852 465.303C130.665 472.699 130.075 482.647 120.546 485.517C117.073 486.562 113.707 485.67 111.188 483.724C113.488 495.163 114.517 506.776 111.45 518.268C110.229 522.828 105.769 526.158 101.079 526.158C97.159 526.158 94.309 524.188 92.34 521.288C92.57 527.058 92.22 532.858 90.99 538.708C90.248 542.241 86.971 544.996 83.492 545.849C84.747 547.264 85.247 549.311 84.044 551.442C78.943 560.472 66.618 556.727 65.785 548.076C62.304 545.478 60.686 541.212 60.016 536.603C59.04 529.881 58.686 523.27 57.58 516.634L57.1572 517.03L56.939 517.218L56.869 517.698C56.235 520.978 54.385 523.275 51.984 524.645C52.506 530.367 51.54 536.194 47.91 540.539C45.492 543.435 41.373 544.575 37.842 543.947C37.62 543.958 37.393 543.957 37.157 543.926C29.16 542.863 24.533 535.278 26.638 528.316C23.418 524.37 22.062 519.363 23.015 514.415C16.784 510.289 16.911 501.227 19.069 493.948C12.537 488.793 10.08 479.156 13.362 471.497C7.47501 464.186 6.65601 453.998 10.656 445.673C4.17901 440.352 4.21601 430.079 10.64 424.637C7.21901 417.846 5.15601 409.709 8.57501 403.494C6.16301 400.832 4.83901 397.038 5.11801 393.372C5.52701 387.988 9.08901 384.268 13.509 381.789L13.815 380.105C14.853 380.234 15.959 379.944 16.934 379.008C17.899 378.081 18.892 377.334 19.919 376.718C21.082 376.703 22.083 376.185 22.787 375.388C24.713 374.734 26.784 374.445 29.081 374.419C34.042 374.365 34.217 366.946 29.6 366.465C28.871 365.73 27.867 365.267 26.778 365.267L25.9253 365.271C23.9316 365.29 21.9188 365.413 20.069 366.205C18.867 366.719 17.94 367.494 17.261 368.442C17.134 369.876 16.354 371.306 14.665 372.487C12.714 373.851 10.046 374.01 7.95801 372.776C5.03501 371.048 5.00501 368.351 5.34201 365.419C5.70403 362.273 5.00103 359.218 4.29438 356.147C3.56047 352.957 2.82271 349.75 3.27001 346.407C3.65901 343.506 4.62501 341.001 6.20001 338.978C2.87901 334.007 2.29301 327.59 4.85001 322.133C-0.476992 316.402 -1.39799 307.568 1.99901 300.671C2.04801 300.504 2.08601 300.333 2.13901 300.168C2.52301 298.996 3.05201 297.939 3.63501 296.928C0.653008 291.762 0.675008 285.423 3.70601 280.279C-0.884992 274.927 -1.03099 266.41 3.05201 260.644C3.07601 260.166 3.12601 259.688 3.16701 259.21C1.29301 254.345 1.74301 248.814 4.12001 244.29C3.27201 242.335 2.61801 240.23 2.20001 237.988C1.12901 232.208 1.68001 226.588 3.28001 220.948C3.53901 220.058 3.82901 219.168 4.13901 218.278C4.19101 214.415 4.33801 210.569 4.53201 206.73C3.77163 203.481 3.64902 199.909 3.63226 196.594L3.62747 194.444C3.62461 194.025 3.61974 193.591 3.61473 193.144C3.55434 187.765 3.47396 180.606 6.66801 176.311C4.44701 171.287 5.36001 164.957 9.06701 160.975C6.46501 156.5 5.91901 151.005 8.53401 146.04C8.95401 145.241 9.44101 144.497 9.97501 143.793C9.75901 139.246 10.716 134.557 13.139 130.038C14.713 127.096 17.064 124.549 19.859 122.511C19.812 121.908 19.783 121.306 19.793 120.713C19.842 118.067 20.429 115.41 21.417 112.931C19.644 109.905 18.822 106.494 19.859 102.818C21.019 98.6583 24.07 95.0783 27.879 93.0583C28.186 89.1363 28.799 85.2373 29.675 81.3903C27.334 76.1773 29.198 69.2973 34.489 66.2263C33.799 62.0603 34.421 57.7403 37.453 54.4863C38.602 53.2533 39.956 52.3183 41.413 51.6983C40.711 47.5093 41.503 43.1513 44.4 39.7403C46.766 36.9553 50.272 35.2633 53.84 35.0143C55.214 27.7283 62.175 22.2803 69.519 22.7143C70.437 19.5063 72.63 16.7093 76.032 15.2913C76.903 14.9283 77.783 14.6893 78.66 14.5563C84.632 8.53231 93.523 4.44931 101.22 2.35831C108.941 0.269266 116.767 0.0670556 123.396 2.49589L123.879 2.67831L124.419 2.60831C126.76 2.34831 129.099 2.19831 131.439 2.13831ZM82.359 58.2303C86.763 56.1893 91.637 56.6363 95.27 60.0083C99.054 63.5193 93.383 69.1633 89.613 65.6643L89.5857 65.6418C89.5395 65.6058 89.4563 65.5475 89.3668 65.4848C89.1654 65.3438 88.932 65.1803 89.0151 65.1976L88.7767 65.1151C88.5898 65.0554 88.4 65.0036 88.208 64.9603C88.3445 64.9648 88.4118 64.9661 88.4095 64.9642L88.1355 64.9469C88.0509 64.9457 87.9066 64.9491 87.7561 64.9526C87.5013 64.9586 87.2287 64.965 87.197 64.9503C87.0967 64.9791 86.9628 65.0206 86.8273 65.0625C86.4305 65.1855 86.0196 65.3127 86.396 65.1383C84.429 66.0503 82.1 65.7143 80.924 63.7033C79.907 61.9653 80.398 59.1383 82.359 58.2303ZM203.067 77.4083C199.466 79.5403 197.135 83.0523 195.72 87.1173C195.01 89.1573 196.529 91.4923 198.514 92.0373C200.647 92.6234 202.596 91.3738 203.363 89.4332L203.434 89.2433C203.813 88.1563 204.419 86.8723 205.168 85.9033C205.808 85.0763 206.803 84.2483 207.553 83.9733C209.356 83.3113 210.634 81.6773 210.467 79.7693C207.502 80.7943 204.749 79.5613 203.067 77.4083ZM243.405 81.3203C247.051 77.6723 252.706 83.3313 249.061 86.9763C246.449 89.5903 244.399 91.6323 242.775 94.8073C241.787 96.7373 239.089 97.2873 237.302 96.2423C235.365 95.1093 234.884 92.6913 235.867 90.7693C237.741 87.1063 240.522 84.2033 243.405 81.3203ZM76.225 117.73L75.4521 117.554C70.6375 116.499 64.2474 115.949 61.34 120.721C58.69 125.069 65.375 129.027 68.128 124.917C68.17 124.916 68.2182 124.916 68.2745 124.921L68.365 124.931L69.599 124.831C71.136 124.82 72.607 125.092 74.098 125.445C79.104 126.63 81.241 118.918 76.225 117.73ZM160.033 157.989L159.931 158.022C159.64 158.121 159.224 158.314 159.132 158.394C158.587 158.87 158.53 158.921 158.369 159.227L158.023 159.899C157.452 161.074 157.092 162.342 156.779 163.835C156.333 165.959 153.844 167.174 151.858 166.629C149.684 166.032 148.621 163.821 149.064 161.708C150.118 156.684 152.635 151.779 157.906 150.274C162.874 148.857 164.975 156.578 160.033 157.989ZM104.828 171.126C99.192 167.132 92.49 166.946 87.309 171.751C83.57 175.22 89.0635 180.776 92.8337 177.527L92.966 177.408C93.103 177.28 93.242 177.168 93.38 177.061C94.056 177.637 94.915 178.002 95.897 178.003C96.1537 178.004 96.4099 178.003 96.666 178.009L97.05 178.022L97.256 178.039L97.282 178.044L97.4619 178.121C97.5141 178.144 97.5695 178.17 97.6231 178.195C97.9079 178.326 98.1459 178.436 97.622 178.108C97.761 178.181 97.891 178.267 98.023 178.351L98.253 178.56C99.761 179.986 102.37 180.174 103.867 178.597C106.518 177.701 107.925 173.319 104.828 171.126ZM181.197 181.543C182.733 179.92 185.293 180.11 186.854 181.543C188.475 183.032 188.293 185.68 186.854 187.2C186.827 187.229 186.802 187.255 186.779 187.278L186.62 187.437C186.478 187.663 186.33 187.885 186.199 188.119C186.129 188.245 186.061 188.372 185.996 188.5L185.607 189.27C185.021 190.413 184.282 191.45 183.398 192.384C181.861 194.007 179.302 193.817 177.741 192.384C176.119 190.895 176.302 188.248 177.741 186.727C177.794 186.67 177.84 186.624 177.878 186.585L177.974 186.49C178.117 186.264 178.264 186.042 178.395 185.809C178.465 185.684 178.533 185.556 178.599 185.428L178.988 184.657C179.573 183.515 180.312 182.477 181.197 181.543ZM32.449 196.066L31.9792 196.003C25.2242 195.138 14.3807 195.934 13.561 204.532C13.108 209.294 19.988 209.593 21.346 205.521C26.334 204.622 31.363 204.45 36.317 204.996C38.207 203.076 38.222 199.385 35.076 198.464C34.632 197.27 33.705 196.247 32.449 196.066ZM67.998 257.967C69.381 257.9 70.786 257.977 72.194 258.131L73.433 258.131L73.6976 258.141C74.2212 258.18 74.7112 258.333 75.168 258.56C75.9315 258.692 76.6918 258.837 77.4451 258.984L79.681 259.426C84.736 260.421 82.583 268.13 77.554 267.141C75.495 266.735 73.426 266.337 71.337 266.122C70.554 266.042 69.768 265.99 68.981 265.971C67.089 267.682 63.257 267.555 62.088 264.347C60.63 260.343 64.676 258.127 67.998 257.967ZM143.153 309.504C136.819 308.794 136.768 298.788 143.153 299.504C156.634 301.016 168.866 307.009 177.825 317.301C181.992 322.087 175.13 329.09 170.885 324.517L170.754 324.372C163.63 316.188 154.016 310.722 143.153 309.504ZM55.863 323.189C61.662 319.151 68.606 319.13 74.876 322.038C79.547 324.204 75.479 331.097 70.839 328.945L70.618 328.859L70.2475 329.002C67.4013 330.048 64.438 330.008 61.494 329.157C60.954 329.432 60.42 329.735 59.9 330.097L59.7505 330.197C55.5682 332.887 51.7164 326.077 55.863 323.189ZM78.529 398.818C75.2577 398.203 71.5934 397.653 68.1515 398.028L67.58 398.099L66.521 398.099C65.601 398.099 64.71 398.469 63.995 399.051C62.863 399.521 61.791 400.151 60.813 400.998C56.916 404.377 62.595 410.015 66.47 406.656C66.6852 406.469 66.935 406.315 67.2126 406.189L67.426 406.099L71.705 406.099C72.094 406.099 72.473 406.018 72.842 405.901C74.231 406.092 75.525 406.367 76.402 406.532C81.434 407.479 83.59 399.77 78.529 398.818ZM108.724 421.017C113.066 418.572 116.934 425.362 112.604 428.017C109.37 430.002 105.63 430.26 101.933 430.288L101.081 430.291C95.925 430.294 95.934 422.294 101.081 422.291C101.348 422.291 101.618 422.293 101.889 422.295L101.893 422.295C104.18 422.312 106.578 422.33 108.567 421.109L108.724 421.017ZM54.426 453.395C51.343 453.398 48.699 454.134 46.413 456.294C44.889 457.735 44.851 460.518 46.413 461.952C47.9907 463.4 50.2796 463.484 51.8991 462.106L52.211 461.826C52.2485 461.792 52.2775 461.765 52.301 461.742C52.431 461.658 52.562 461.572 52.7 461.5L52.4391 461.671C52.299 461.772 52.4871 461.685 52.7035 461.585C52.7919 461.544 52.8843 461.502 52.9596 461.469L53.041 461.436L53.067 461.43L53.274 461.414C53.6395 461.395 54.0068 461.395 54.3733 461.395L54.426 461.395C56.518 461.393 58.522 459.557 58.426 457.395C58.328 455.229 56.668 453.393 54.426 453.395ZM67.848 498.667C68.407 496.635 70.707 495.231 72.769 495.874C74.818 496.513 76.432 496.593 78.618 496.595C80.787 496.597 82.618 498.424 82.618 500.595C82.618 502.755 80.779 504.597 78.618 504.595C75.93 504.593 73.221 504.392 70.642 503.588C68.572 502.943 67.258 500.815 67.848 498.667Z"
      transform="translate(-48.99981 23.00009)"
      fill={strokeColor || '#000000'}
      fillRule="evenodd"
      stroke="none"
    />
  </g>
);