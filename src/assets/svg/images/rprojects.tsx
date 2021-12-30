import React from "react";

import { SvgProps } from "../svgtypes";

interface Props extends SvgProps {
    id?: string
}

const RecentProjects: React.FunctionComponent<Props> = ({ color = "#000", ...rest }) => {
    return (
        <svg width="1596" height="500" viewBox="0 0 1596 500" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path d="M276.629 156.312L278.285 155.192L277.69 154.312H276.629V156.312ZM258.197 156.312V154.312H256.197V156.312H258.197ZM258.197 207V209H260.197V207H258.197ZM190.229 207H188.229V209H190.229V207ZM190.229 5.39999V3.39999H188.229V5.39999H190.229ZM335.957 14.616L335.144 16.4436L335.144 16.4436L335.957 14.616ZM367.925 41.112L366.248 42.202L366.248 42.202L367.925 41.112ZM369.365 119.16L367.655 118.122L367.655 118.122L369.365 119.16ZM341.141 144.792L340.224 143.014L338.216 144.05L339.487 145.917L341.141 144.792ZM383.477 207V209H387.257L385.13 205.875L383.477 207ZM310.901 207L309.244 208.12L309.839 209H310.901V207ZM303.701 64.152L302.349 65.6263L302.366 65.6419L302.384 65.6571L303.701 64.152ZM258.197 57.816V55.816H256.197V57.816H258.197ZM258.197 105.048H256.197V107.048H258.197V105.048ZM303.701 99L305.018 100.505L305.035 100.49L305.052 100.474L303.701 99ZM276.629 154.312H258.197V158.312H276.629V154.312ZM256.197 156.312V207H260.197V156.312H256.197ZM258.197 205L190.229 205V209L258.197 209V205ZM192.229 207V5.39999H188.229V207H192.229ZM190.229 7.39999H287.285V3.39999H190.229V7.39999ZM287.285 7.39999C305.692 7.39999 321.628 10.4363 335.144 16.4436L336.769 12.7884C322.637 6.50764 306.125 3.39999 287.285 3.39999V7.39999ZM335.144 16.4436C348.652 22.447 358.992 31.0387 366.248 42.202L369.601 40.022C361.882 28.1453 350.909 19.073 336.769 12.7884L335.144 16.4436ZM366.248 42.202C373.5 53.3601 377.157 66.4117 377.157 81.432H381.157C381.157 65.7322 377.325 51.9038 369.601 40.022L366.248 42.202ZM377.157 81.432C377.157 95.52 373.967 107.726 367.655 118.122L371.074 120.198C377.818 109.09 381.157 96.144 381.157 81.432H377.157ZM367.655 118.122C361.337 128.528 352.218 136.83 340.224 143.014L342.057 146.57C354.639 140.082 364.336 131.296 371.074 120.198L367.655 118.122ZM339.487 145.917L381.823 208.125L385.13 205.875L342.794 143.667L339.487 145.917ZM383.477 205H310.901V209H383.477V205ZM312.557 205.88L278.285 155.192L274.972 157.432L309.244 208.12L312.557 205.88ZM312.613 81.432C312.613 73.5071 310.155 67.1419 305.018 62.6468L302.384 65.6571C306.462 69.2261 308.613 74.3809 308.613 81.432H312.613ZM305.052 62.6777C299.933 57.9856 292.448 55.816 282.965 55.816V59.816C291.913 59.816 298.252 61.8704 302.349 65.6263L305.052 62.6777ZM282.965 55.816H258.197V59.816H282.965V55.816ZM256.197 57.816V105.048H260.197V57.816H256.197ZM258.197 107.048H282.965V103.048H258.197V107.048ZM282.965 107.048C292.428 107.048 299.899 104.984 305.018 100.505L302.384 97.4948C298.286 101.08 291.933 103.048 282.965 103.048V107.048ZM305.052 100.474C310.154 95.7971 312.613 89.3601 312.613 81.432H308.613C308.613 88.4799 306.463 93.7549 302.349 97.5257L305.052 100.474ZM572.438 155.736H574.438V153.736H572.438V155.736ZM572.438 207V209H574.438V207H572.438ZM404.822 207H402.822V209H404.822V207ZM404.822 5.39999V3.39999H402.822V5.39999H404.822ZM568.694 5.39999H570.694V3.39999H568.694V5.39999ZM568.694 56.664V58.664H570.694V56.664H568.694ZM471.638 56.664V54.664H469.638V56.664H471.638ZM471.638 80.28H469.638V82.28H471.638V80.28ZM556.886 80.28H558.886V78.28H556.886V80.28ZM556.886 129.24V131.24H558.886V129.24H556.886ZM471.638 129.24V127.24H469.638V129.24H471.638ZM471.638 155.736H469.638V157.736H471.638V155.736ZM570.438 155.736V207H574.438V155.736H570.438ZM572.438 205H404.822V209H572.438V205ZM406.822 207V5.39999H402.822V207H406.822ZM404.822 7.39999L568.694 7.39999V3.39999L404.822 3.39999V7.39999ZM566.694 5.39999V56.664H570.694V5.39999H566.694ZM568.694 54.664H471.638V58.664H568.694V54.664ZM469.638 56.664V80.28H473.638V56.664H469.638ZM471.638 82.28H556.886V78.28H471.638V82.28ZM554.886 80.28V129.24H558.886V80.28H554.886ZM556.886 127.24H471.638V131.24H556.886V127.24ZM469.638 129.24V155.736H473.638V129.24H469.638ZM471.638 157.736H572.438V153.736H471.638V157.736ZM645.26 198.36L644.326 200.129L644.333 200.133L644.341 200.137L645.26 198.36ZM604.94 160.92L603.221 161.943L603.228 161.955L603.235 161.967L604.94 160.92ZM604.94 51.768L603.23 50.73L603.226 50.736L604.94 51.768ZM645.26 14.328L646.178 16.1047L646.186 16.1007L646.193 16.0965L645.26 14.328ZM755.276 11.16L754.455 12.9838L754.455 12.9838L755.276 11.16ZM793.292 41.112L794.623 42.604L796.006 41.3696L794.88 39.8971L793.292 41.112ZM750.38 79.416L748.812 80.6584L750.129 82.3201L751.711 80.908L750.38 79.416ZM672.044 69.624L673.488 71.0071L673.495 70.9995L673.503 70.9919L672.044 69.624ZM672.044 143.064L670.584 144.432L670.592 144.44L670.599 144.447L672.044 143.064ZM750.38 132.984L751.711 131.492L750.129 130.08L748.812 131.742L750.38 132.984ZM793.292 171.288L794.88 172.503L796.006 171.03L794.623 169.796L793.292 171.288ZM755.276 201.24L754.455 199.416L754.455 199.416L755.276 201.24ZM702.86 209.608C681.832 209.608 662.952 205.253 646.178 196.583L644.341 200.137C661.743 209.131 681.263 213.608 702.86 213.608V209.608ZM646.193 196.591C629.411 187.729 616.242 175.493 606.644 159.873L603.235 161.967C613.221 178.219 626.932 190.943 644.326 200.129L646.193 196.591ZM606.658 159.897C597.258 144.104 592.54 126.223 592.54 106.2H588.54C588.54 126.881 593.421 145.48 603.221 161.943L606.658 159.897ZM592.54 106.2C592.54 86.1764 597.258 68.3956 606.653 52.8L603.226 50.736C593.421 67.0124 588.54 85.5196 588.54 106.2H592.54ZM606.649 52.8059C616.246 36.9986 629.41 24.7713 646.178 16.1047L644.341 12.5513C626.933 21.5486 613.217 34.2813 603.23 50.73L606.649 52.8059ZM646.193 16.0965C662.965 7.23971 681.839 2.79199 702.86 2.79199V-1.20801C681.256 -1.20801 661.73 3.36828 644.326 12.5594L646.193 16.0965ZM702.86 2.79199C722.206 2.79199 739.391 6.20534 754.455 12.9838L756.096 9.33616C740.44 2.29065 722.681 -1.20801 702.86 -1.20801V2.79199ZM754.455 12.9838C769.52 19.7632 781.925 29.5411 791.703 42.3269L794.88 39.8971C784.69 26.5708 771.751 16.3808 756.096 9.33615L754.455 12.9838ZM791.96 39.6199L749.048 77.9239L751.711 80.908L794.623 42.604L791.96 39.6199ZM751.947 78.1736C739.168 62.052 723.94 53.8 706.316 53.8V57.8C722.483 57.8 736.632 65.292 748.812 80.6584L751.947 78.1736ZM706.316 53.8C691.631 53.8 679.652 58.5845 670.584 68.2561L673.503 70.9919C681.715 62.2315 692.584 57.8 706.316 57.8V53.8ZM670.599 68.2408C661.525 77.7184 657.084 90.4494 657.084 106.2H661.084C661.084 91.2306 665.282 79.5776 673.488 71.0071L670.599 68.2408ZM657.084 106.2C657.084 121.952 661.525 134.769 670.584 144.432L673.503 141.696C665.282 132.927 661.084 121.168 661.084 106.2H657.084ZM670.599 144.447C679.669 153.921 691.644 158.6 706.316 158.6V154.6C692.571 154.6 681.698 150.255 673.488 141.681L670.599 144.447ZM706.316 158.6C723.94 158.6 739.168 150.348 751.947 134.226L748.812 131.742C736.632 147.108 722.483 154.6 706.316 154.6V158.6ZM749.048 134.476L791.96 172.78L794.623 169.796L751.711 131.492L749.048 134.476ZM791.703 170.073C781.925 182.859 769.52 192.637 754.455 199.416L756.096 203.064C771.751 196.019 784.69 185.829 794.88 172.503L791.703 170.073ZM754.455 199.416C739.391 206.195 722.206 209.608 702.86 209.608V213.608C722.681 213.608 740.44 210.109 756.096 203.064L754.455 199.416ZM980.532 155.736H982.532V153.736H980.532V155.736ZM980.532 207V209H982.532V207H980.532ZM812.916 207H810.916V209H812.916V207ZM812.916 5.39999V3.39999H810.916V5.39999H812.916ZM976.788 5.39999H978.788V3.39999H976.788V5.39999ZM976.788 56.664V58.664H978.788V56.664H976.788ZM879.732 56.664V54.664H877.732V56.664H879.732ZM879.732 80.28H877.732V82.28H879.732V80.28ZM964.98 80.28H966.98V78.28H964.98V80.28ZM964.98 129.24V131.24H966.98V129.24H964.98ZM879.732 129.24V127.24H877.732V129.24H879.732ZM879.732 155.736H877.732V157.736H879.732V155.736ZM978.532 155.736V207H982.532V155.736H978.532ZM980.532 205H812.916V209H980.532V205ZM814.916 207V5.39999H810.916V207H814.916ZM812.916 7.39999L976.788 7.39999V3.39999L812.916 3.39999V7.39999ZM974.788 5.39999V56.664H978.788V5.39999H974.788ZM976.788 54.664L879.732 54.664V58.664L976.788 58.664V54.664ZM877.732 56.664V80.28L881.732 80.28V56.664L877.732 56.664ZM879.732 82.28L964.98 82.28V78.28L879.732 78.28V82.28ZM962.98 80.28V129.24H966.98V80.28H962.98ZM964.98 127.24H879.732V131.24H964.98V127.24ZM877.732 129.24V155.736H881.732V129.24H877.732ZM879.732 157.736H980.532V153.736H879.732V157.736ZM1205.42 5.39999H1207.42V3.39999H1205.42V5.39999ZM1205.42 207V209H1207.42V207H1205.42ZM1149.55 207L1148.01 208.283L1148.61 209H1149.55V207ZM1072.94 115.416L1074.47 114.133L1070.94 109.908V115.416H1072.94ZM1072.94 207V209H1074.94V207H1072.94ZM1006.7 207H1004.7V209H1006.7V207ZM1006.7 5.39999V3.39999H1004.7V5.39999H1006.7ZM1062.57 5.39999L1064.1 4.11677L1063.5 3.39999H1062.57V5.39999ZM1139.18 96.984L1137.64 98.2672L1141.18 102.492V96.984H1139.18ZM1139.18 5.39999V3.39999H1137.18V5.39999H1139.18ZM1203.42 5.39999V207H1207.42V5.39999H1203.42ZM1205.42 205H1149.55V209H1205.42V205ZM1151.08 205.717L1074.47 114.133L1071.4 116.699L1148.01 208.283L1151.08 205.717ZM1070.94 115.416V207H1074.94V115.416H1070.94ZM1072.94 205H1006.7V209H1072.94V205ZM1008.7 207V5.39999H1004.7V207H1008.7ZM1006.7 7.39999H1062.57V3.39999H1006.7V7.39999ZM1061.04 6.6832L1137.64 98.2672L1140.71 95.7008L1064.1 4.11677L1061.04 6.6832ZM1141.18 96.984V5.39999H1137.18V96.984H1141.18ZM1139.18 7.39999L1205.42 7.39999V3.39999L1139.18 3.39999V7.39999ZM1281.94 58.104H1283.94V56.104H1281.94V58.104ZM1222.9 58.104H1220.9V60.104H1222.9V58.104ZM1222.9 5.39999V3.39999H1220.9V5.39999H1222.9ZM1408.95 5.39999H1410.95V3.39999H1408.95V5.39999ZM1408.95 58.104V60.104H1410.95V58.104H1408.95ZM1349.91 58.104V56.104H1347.91V58.104H1349.91ZM1349.91 207V209H1351.91V207H1349.91ZM1281.94 207H1279.94V209H1281.94V207ZM1281.94 56.104H1222.9V60.104H1281.94V56.104ZM1224.9 58.104V5.39999H1220.9V58.104H1224.9ZM1222.9 7.39999L1408.95 7.39999V3.39999L1222.9 3.39999V7.39999ZM1406.95 5.39999V58.104H1410.95V5.39999H1406.95ZM1408.95 56.104L1349.91 56.104V60.104L1408.95 60.104V56.104ZM1347.91 58.104V207H1351.91V58.104H1347.91ZM1349.91 205H1281.94V209H1349.91V205ZM1283.94 207V58.104H1279.94V207H1283.94ZM146.394 302.616L145.582 304.444L145.582 304.444L146.394 302.616ZM178.362 329.112L176.685 330.202L176.685 330.202L178.362 329.112ZM178.362 409.752L176.685 408.662L176.685 408.662L178.362 409.752ZM146.394 436.248L145.582 434.42L145.582 434.42L146.394 436.248ZM68.634 445.464V443.464H66.634V445.464H68.634ZM68.634 495V497H70.634V495H68.634ZM0.666001 495H-1.334V497H0.666001V495ZM0.666001 293.4V291.4H-1.334V293.4H0.666001ZM114.138 387L115.455 388.505L115.472 388.49L115.489 388.474L114.138 387ZM114.138 352.152L112.787 353.626L112.804 353.642L112.821 353.657L114.138 352.152ZM68.634 345.816L68.634 343.816H66.634L66.634 345.816H68.634ZM68.634 393.048H66.634V395.048H68.634V393.048ZM97.722 295.4C116.129 295.4 132.065 298.436 145.582 304.444L147.206 300.788C133.075 294.508 116.563 291.4 97.722 291.4V295.4ZM145.582 304.444C159.089 310.447 169.429 319.039 176.685 330.202L180.039 328.022C172.319 316.145 161.347 307.073 147.206 300.788L145.582 304.444ZM176.685 330.202C183.938 341.36 187.594 354.412 187.594 369.432H191.594C191.594 353.732 187.762 339.904 180.039 328.022L176.685 330.202ZM187.594 369.432C187.594 384.452 183.938 397.504 176.685 408.662L180.039 410.842C187.762 398.96 191.594 385.132 191.594 369.432H187.594ZM176.685 408.662C169.429 419.825 159.089 428.417 145.582 434.42L147.206 438.076C161.347 431.791 172.319 422.719 180.039 410.842L176.685 408.662ZM145.582 434.42C132.065 440.428 116.129 443.464 97.722 443.464V447.464C116.563 447.464 133.075 444.356 147.206 438.076L145.582 434.42ZM97.722 443.464H68.634V447.464H97.722V443.464ZM66.634 445.464V495H70.634V445.464H66.634ZM68.634 493H0.666001V497H68.634V493ZM2.666 495L2.666 293.4H-1.334L-1.334 495H2.666ZM0.666001 295.4H97.722V291.4H0.666001V295.4ZM93.402 395.048C102.866 395.048 110.337 392.984 115.455 388.505L112.821 385.495C108.723 389.08 102.37 391.048 93.402 391.048V395.048ZM115.489 388.474C120.592 383.797 123.05 377.36 123.05 369.432H119.05C119.05 376.48 116.9 381.755 112.787 385.526L115.489 388.474ZM123.05 369.432C123.05 361.507 120.592 355.142 115.455 350.647L112.821 353.657C116.9 357.226 119.05 362.381 119.05 369.432H123.05ZM115.489 350.678C110.371 345.986 102.885 343.816 93.402 343.816L93.402 347.816C102.351 347.816 108.689 349.87 112.787 353.626L115.489 350.678ZM93.402 343.816H68.634L68.634 347.816H93.402L93.402 343.816ZM66.634 345.816V393.048H70.634V345.816H66.634ZM68.634 395.048H93.402V391.048H68.634V395.048ZM298.285 444.312L299.942 443.192L299.347 442.312H298.285V444.312ZM279.853 444.312V442.312H277.853V444.312H279.853ZM279.853 495V497H281.853V495H279.853ZM211.885 495H209.885V497H211.885V495ZM211.885 293.4V291.4H209.885V293.4H211.885ZM357.613 302.616L356.8 304.444L356.8 304.444L357.613 302.616ZM389.581 329.112L387.904 330.202L387.904 330.202L389.581 329.112ZM391.021 407.16L389.311 406.122L389.311 406.122L391.021 407.16ZM362.797 432.792L361.88 431.014L359.872 432.05L361.143 433.917L362.797 432.792ZM405.133 495V497H408.913L406.786 493.875L405.133 495ZM332.557 495L330.9 496.12L331.495 497H332.557V495ZM325.357 352.152L324.005 353.626L324.022 353.642L324.04 353.657L325.357 352.152ZM279.853 345.816V343.816H277.853V345.816H279.853ZM279.853 393.048H277.853V395.048H279.853V393.048ZM325.357 387L326.674 388.505L326.691 388.49L326.708 388.474L325.357 387ZM298.285 442.312H279.853V446.312H298.285V442.312ZM277.853 444.312L277.853 495H281.853L281.853 444.312H277.853ZM279.853 493H211.885V497H279.853V493ZM213.885 495V293.4H209.885V495H213.885ZM211.885 295.4H308.941V291.4H211.885V295.4ZM308.941 295.4C327.348 295.4 343.284 298.436 356.8 304.444L358.425 300.788C344.293 294.508 327.782 291.4 308.941 291.4V295.4ZM356.8 304.444C370.308 310.447 380.648 319.039 387.904 330.202L391.258 328.022C383.538 316.145 372.565 307.073 358.425 300.788L356.8 304.444ZM387.904 330.202C395.157 341.36 398.813 354.412 398.813 369.432H402.813C402.813 353.732 398.981 339.904 391.258 328.022L387.904 330.202ZM398.813 369.432C398.813 383.52 395.623 395.726 389.311 406.122L392.73 408.198C399.475 397.09 402.813 384.144 402.813 369.432H398.813ZM389.311 406.122C382.993 416.528 373.874 424.83 361.88 431.014L363.713 434.57C376.295 428.082 385.992 419.296 392.73 408.198L389.311 406.122ZM361.143 433.917L403.479 496.125L406.786 493.875L364.45 431.667L361.143 433.917ZM405.133 493H332.557V497H405.133V493ZM334.214 493.88L299.942 443.192L296.628 445.432L330.9 496.12L334.214 493.88ZM334.269 369.432C334.269 361.507 331.811 355.142 326.674 350.647L324.04 353.657C328.119 357.226 330.269 362.381 330.269 369.432H334.269ZM326.708 350.678C321.59 345.986 314.104 343.816 304.621 343.816V347.816C313.569 347.816 319.908 349.87 324.005 353.626L326.708 350.678ZM304.621 343.816H279.853V347.816H304.621V343.816ZM277.853 345.816V393.048H281.853V345.816H277.853ZM279.853 395.048H304.621V391.048H279.853V395.048ZM304.621 395.048C314.084 395.048 321.556 392.984 326.674 388.505L324.04 385.495C319.942 389.08 313.589 391.048 304.621 391.048V395.048ZM326.708 388.474C331.811 383.797 334.269 377.36 334.269 369.432H330.269C330.269 376.48 328.119 381.755 324.005 385.526L326.708 388.474ZM473.711 486.072L474.636 484.299L473.711 486.072ZM433.103 448.632L431.393 449.67L431.398 449.679L433.103 448.632ZM433.103 340.056L434.807 341.103L434.812 341.094L433.103 340.056ZM590.639 302.328L591.564 300.555L591.564 300.555L590.639 302.328ZM631.247 340.056L629.537 341.094L629.542 341.103L631.247 340.056ZM631.247 448.632L632.951 449.679L632.956 449.67L631.247 448.632ZM590.639 486.072L591.564 487.845L591.564 487.845L590.639 486.072ZM554.927 438.552L555.955 440.267L555.962 440.263L555.969 440.259L554.927 438.552ZM571.343 420.984L573.103 421.932L573.108 421.923L573.113 421.914L571.343 420.984ZM571.343 367.704L569.572 368.634L569.577 368.643L569.582 368.652L571.343 367.704ZM554.927 350.136L553.862 351.829L553.89 351.847L553.919 351.864L554.927 350.136ZM509.135 350.136L510.163 351.851L510.17 351.847L510.177 351.843L509.135 350.136ZM493.007 367.704L494.767 368.652L494.772 368.643L494.777 368.634L493.007 367.704ZM493.007 420.984L491.236 421.914L491.241 421.923L491.246 421.932L493.007 420.984ZM509.135 438.552L508.07 440.245L508.098 440.263L508.127 440.28L509.135 438.552ZM532.175 497.608C510.764 497.608 491.599 493.158 474.636 484.299L472.785 487.845C490.382 497.034 510.193 501.608 532.175 501.608V497.608ZM474.636 484.299C457.662 475.435 444.401 463.2 434.807 447.585L431.398 449.679C441.388 465.936 455.199 478.661 472.785 487.845L474.636 484.299ZM434.812 447.594C425.223 431.8 420.415 414.02 420.415 394.2H416.415C416.415 414.7 421.398 433.208 431.393 449.67L434.812 447.594ZM420.415 394.2C420.415 374.38 425.223 356.7 434.807 341.103L431.398 339.009C421.398 355.284 416.415 373.7 416.415 394.2H420.415ZM434.812 341.094C444.408 325.288 457.668 312.962 474.636 304.101L472.785 300.555C455.193 309.742 441.381 322.567 431.393 339.018L434.812 341.094ZM474.636 304.101C491.599 295.242 510.764 290.792 532.175 290.792V286.792C510.193 286.792 490.382 291.366 472.785 300.555L474.636 304.101ZM532.175 290.792C553.585 290.792 572.75 295.242 589.713 304.101L591.564 300.555C573.967 291.366 554.156 286.792 532.175 286.792V290.792ZM589.713 304.101C606.681 312.962 619.941 325.288 629.537 341.094L632.956 339.018C622.968 322.567 609.156 309.742 591.564 300.555L589.713 304.101ZM629.542 341.103C639.126 356.7 643.935 374.38 643.935 394.2H647.935C647.935 373.7 642.951 355.284 632.951 339.009L629.542 341.103ZM643.935 394.2C643.935 414.02 639.126 431.8 629.537 447.594L632.956 449.67C642.951 433.208 647.935 414.7 647.935 394.2H643.935ZM629.542 447.585C619.948 463.2 606.687 475.435 589.713 484.299L591.564 487.845C609.15 478.661 622.961 465.936 632.951 449.679L629.542 447.585ZM589.713 484.299C572.75 493.158 553.585 497.608 532.175 497.608V501.608C554.156 501.608 573.967 497.034 591.564 487.845L589.713 484.299ZM532.175 446.6C540.956 446.6 548.9 444.5 555.955 440.267L553.898 436.837C547.513 440.668 540.289 442.6 532.175 442.6V446.6ZM555.969 440.259C563.199 435.84 568.912 429.716 573.103 421.932L569.582 420.036C565.709 427.228 560.478 432.816 553.884 436.845L555.969 440.259ZM573.113 421.914C577.32 413.901 579.391 404.644 579.391 394.2H575.391C575.391 404.108 573.429 412.707 569.572 420.054L573.113 421.914ZM579.391 394.2C579.391 383.758 577.32 374.587 573.103 366.756L569.582 368.652C573.429 375.797 575.391 384.29 575.391 394.2H579.391ZM573.113 366.774C568.922 358.791 563.198 352.645 555.934 348.408L553.919 351.864C560.479 355.691 565.699 361.257 569.572 368.634L573.113 366.774ZM555.991 348.443C548.931 344.005 540.974 341.8 532.175 341.8V345.8C540.271 345.8 547.482 347.819 553.862 351.829L555.991 348.443ZM532.175 341.8C523.375 341.8 515.331 344.005 508.092 348.429L510.177 351.843C516.762 347.819 524.078 345.8 532.175 345.8V341.8ZM508.106 348.421C501.038 352.662 495.419 358.805 491.236 366.774L494.777 368.634C498.658 361.243 503.791 355.674 510.163 351.851L508.106 348.421ZM491.246 366.756C487.029 374.587 484.959 383.758 484.959 394.2H488.959C488.959 384.29 490.92 375.797 494.767 368.652L491.246 366.756ZM484.959 394.2C484.959 404.644 487.029 413.901 491.236 421.914L494.777 420.054C490.92 412.707 488.959 404.108 488.959 394.2H484.959ZM491.246 421.932C495.429 429.702 501.037 435.824 508.07 440.245L510.199 436.859C503.792 432.832 498.648 427.242 494.767 420.036L491.246 421.932ZM508.127 440.28C515.362 444.5 523.393 446.6 532.175 446.6V442.6C524.06 442.6 516.731 440.668 510.142 436.824L508.127 440.28ZM674.449 492.12L673.691 493.971L673.708 493.978L673.725 493.985L674.449 492.12ZM643.057 469.656L641.53 468.364L640.438 469.653L641.528 470.945L643.057 469.656ZM679.633 426.456L681.194 425.207L679.677 423.309L678.106 425.164L679.633 426.456ZM695.473 441.432L694.407 443.124L694.407 443.124L695.473 441.432ZM727.729 439.992L726.249 438.647L726.232 438.665L726.215 438.685L727.729 439.992ZM733.489 344.664H735.489V342.664H733.489V344.664ZM664.945 344.664H662.945V346.664H664.945V344.664ZM664.945 293.4V291.4H662.945V293.4H664.945ZM800.593 293.4H802.593V291.4H800.593V293.4ZM779.281 479.16L780.675 480.594L780.675 480.593L779.281 479.16ZM717.361 497.608C701.83 497.608 687.775 495.146 675.172 490.255L673.725 493.985C686.85 499.078 701.404 501.608 717.361 501.608V497.608ZM675.206 490.269C662.812 485.199 652.619 477.895 644.586 468.367L641.528 470.945C650.006 481.001 660.742 488.673 673.691 493.971L675.206 490.269ZM644.583 470.948L681.159 427.748L678.106 425.164L641.53 468.364L644.583 470.948ZM678.071 427.705C683.535 434.535 688.975 439.704 694.407 443.124L696.538 439.74C691.603 436.632 686.483 431.817 681.194 425.207L678.071 427.705ZM694.407 443.124C699.877 446.569 705.618 448.328 711.601 448.328V444.328C706.447 444.328 701.436 442.823 696.538 439.74L694.407 443.124ZM711.601 448.328C719.115 448.328 725.116 446.078 729.242 441.299L726.215 438.685C723.046 442.354 718.294 444.328 711.601 444.328V448.328ZM729.209 441.337C733.506 436.61 735.489 429.806 735.489 421.272H731.489C731.489 429.25 729.631 434.926 726.249 438.647L729.209 441.337ZM735.489 421.272V344.664H731.489V421.272H735.489ZM733.489 342.664H664.945V346.664H733.489V342.664ZM666.945 344.664V293.4H662.945V344.664H666.945ZM664.945 295.4H800.593V291.4H664.945V295.4ZM798.593 293.4V417.24H802.593V293.4H798.593ZM798.593 417.24C798.593 444.369 791.577 464.405 777.886 477.727L780.675 480.593C795.4 466.267 802.593 445.023 802.593 417.24H798.593ZM777.886 477.726C764.37 490.872 744.312 497.608 717.361 497.608V501.608C744.938 501.608 766.159 494.712 780.675 480.594L777.886 477.726ZM999.376 443.736H1001.38V441.736H999.376V443.736ZM999.376 495V497H1001.38V495H999.376ZM831.76 495H829.76V497H831.76V495ZM831.76 293.4V291.4H829.76V293.4H831.76ZM995.632 293.4H997.632V291.4H995.632V293.4ZM995.632 344.664V346.664H997.632V344.664H995.632ZM898.576 344.664V342.664H896.576V344.664H898.576ZM898.576 368.28H896.576V370.28H898.576V368.28ZM983.824 368.28H985.824V366.28H983.824V368.28ZM983.824 417.24V419.24H985.824V417.24H983.824ZM898.576 417.24V415.24H896.576V417.24H898.576ZM898.576 443.736H896.576V445.736H898.576V443.736ZM997.376 443.736V495H1001.38V443.736H997.376ZM999.376 493H831.76V497H999.376V493ZM833.76 495V293.4H829.76V495H833.76ZM831.76 295.4H995.632V291.4H831.76V295.4ZM993.632 293.4V344.664H997.632V293.4H993.632ZM995.632 342.664H898.576V346.664H995.632V342.664ZM896.576 344.664V368.28H900.576V344.664H896.576ZM898.576 370.28H983.824V366.28H898.576V370.28ZM981.824 368.28V417.24H985.824V368.28H981.824ZM983.824 415.24H898.576V419.24H983.824V415.24ZM896.576 417.24V443.736H900.576V417.24H896.576ZM898.576 445.736H999.376V441.736H898.576V445.736ZM1072.2 486.36L1071.26 488.129L1071.27 488.133L1071.28 488.137L1072.2 486.36ZM1031.88 448.92L1030.16 449.943L1030.17 449.955L1030.17 449.967L1031.88 448.92ZM1031.88 339.768L1030.17 338.73L1030.16 338.736L1031.88 339.768ZM1072.2 302.328L1073.12 304.105L1073.12 304.101L1073.13 304.097L1072.2 302.328ZM1182.21 299.16L1181.39 300.984L1181.39 300.984L1182.21 299.16ZM1220.23 329.112L1221.56 330.604L1222.94 329.37L1221.82 327.897L1220.23 329.112ZM1177.32 367.416L1175.75 368.658L1177.07 370.32L1178.65 368.908L1177.32 367.416ZM1098.98 357.624L1100.43 359.007L1100.43 359L1100.44 358.992L1098.98 357.624ZM1098.98 431.064L1097.52 432.432L1097.53 432.44L1097.54 432.447L1098.98 431.064ZM1177.32 420.984L1178.65 419.492L1177.07 418.08L1175.75 419.742L1177.32 420.984ZM1220.23 459.288L1221.82 460.503L1222.94 459.03L1221.56 457.796L1220.23 459.288ZM1182.21 489.24L1181.39 487.416L1181.39 487.416L1182.21 489.24ZM1129.8 497.608C1108.77 497.608 1089.89 493.253 1073.12 484.583L1071.28 488.137C1088.68 497.131 1108.2 501.608 1129.8 501.608V497.608ZM1073.13 484.591C1056.35 475.729 1043.18 463.493 1033.58 447.873L1030.17 449.967C1040.16 466.219 1053.87 478.943 1071.26 488.129L1073.13 484.591ZM1033.6 447.897C1024.2 432.104 1019.48 414.223 1019.48 394.2H1015.48C1015.48 414.881 1020.36 433.48 1030.16 449.943L1033.6 447.897ZM1019.48 394.2C1019.48 374.176 1024.2 356.396 1033.59 340.8L1030.16 338.736C1020.36 355.012 1015.48 373.52 1015.48 394.2H1019.48ZM1033.59 340.806C1043.18 324.999 1056.35 312.771 1073.12 304.105L1071.28 300.551C1053.87 309.549 1040.15 322.281 1030.17 338.73L1033.59 340.806ZM1073.13 304.097C1089.9 295.24 1108.78 290.792 1129.8 290.792V286.792C1108.19 286.792 1088.67 291.368 1071.26 300.559L1073.13 304.097ZM1129.8 290.792C1149.14 290.792 1166.33 294.205 1181.39 300.984L1183.03 297.336C1167.38 290.291 1149.62 286.792 1129.8 286.792V290.792ZM1181.39 300.984C1196.46 307.763 1208.86 317.541 1218.64 330.327L1221.82 327.897C1211.63 314.571 1198.69 304.381 1183.03 297.336L1181.39 300.984ZM1218.9 327.62L1175.99 365.924L1178.65 368.908L1221.56 330.604L1218.9 327.62ZM1178.88 366.174C1166.11 350.052 1150.88 341.8 1133.25 341.8V345.8C1149.42 345.8 1163.57 353.292 1175.75 368.658L1178.88 366.174ZM1133.25 341.8C1118.57 341.8 1106.59 346.584 1097.52 356.256L1100.44 358.992C1108.65 350.231 1119.52 345.8 1133.25 345.8V341.8ZM1097.54 356.241C1088.46 365.718 1084.02 378.449 1084.02 394.2H1088.02C1088.02 379.231 1092.22 367.578 1100.43 359.007L1097.54 356.241ZM1084.02 394.2C1084.02 409.952 1088.46 422.769 1097.52 432.432L1100.44 429.696C1092.22 420.927 1088.02 409.168 1088.02 394.2H1084.02ZM1097.54 432.447C1106.61 441.921 1118.58 446.6 1133.25 446.6V442.6C1119.51 442.6 1108.64 438.255 1100.43 429.681L1097.54 432.447ZM1133.25 446.6C1150.88 446.6 1166.11 438.348 1178.88 422.226L1175.75 419.742C1163.57 435.108 1149.42 442.6 1133.25 442.6V446.6ZM1175.99 422.476L1218.9 460.78L1221.56 457.796L1178.65 419.492L1175.99 422.476ZM1218.64 458.073C1208.86 470.859 1196.46 480.637 1181.39 487.416L1183.03 491.064C1198.69 484.019 1211.63 473.829 1221.82 460.503L1218.64 458.073ZM1181.39 487.416C1166.33 494.195 1149.14 497.608 1129.8 497.608V501.608C1149.62 501.608 1167.38 498.109 1183.03 491.064L1181.39 487.416ZM1282.22 346.104H1284.22V344.104H1282.22V346.104ZM1223.18 346.104H1221.18V348.104H1223.18V346.104ZM1223.18 293.4V291.4H1221.18V293.4H1223.18ZM1409.23 293.4H1411.23V291.4H1409.23V293.4ZM1409.23 346.104V348.104H1411.23V346.104H1409.23ZM1350.19 346.104V344.104H1348.19V346.104H1350.19ZM1350.19 495V497H1352.19V495H1350.19ZM1282.22 495H1280.22V497H1282.22V495ZM1282.22 344.104H1223.18V348.104H1282.22V344.104ZM1225.18 346.104V293.4H1221.18V346.104H1225.18ZM1223.18 295.4H1409.23V291.4H1223.18V295.4ZM1407.23 293.4V346.104H1411.23V293.4H1407.23ZM1409.23 344.104H1350.19V348.104H1409.23V344.104ZM1348.19 346.104V495H1352.19V346.104H1348.19ZM1350.19 493H1282.22V497H1350.19V493ZM1284.22 495V346.104H1280.22V495H1284.22ZM1453.09 494.136L1452.62 496.079L1452.63 496.082L1452.65 496.086L1453.09 494.136ZM1414.21 478.872L1412.38 478.064L1411.68 479.652L1413.16 480.57L1414.21 478.872ZM1436.1 429.336L1437.1 427.606L1435.17 426.486L1434.27 428.528L1436.1 429.336ZM1468.36 442.872L1467.8 444.793L1467.81 444.797L1467.83 444.801L1468.36 442.872ZM1522.79 445.176L1523.58 447.014L1523.61 446.999L1523.65 446.982L1522.79 445.176ZM1520.77 427.32L1520.02 429.172L1520.03 429.177L1520.04 429.181L1520.77 427.32ZM1494.85 420.408L1494.44 422.365L1494.45 422.367L1494.85 420.408ZM1455.97 410.04L1455.28 411.915L1455.29 411.921L1455.31 411.927L1455.97 410.04ZM1428.9 391.608L1427.41 392.937L1427.41 392.945L1427.42 392.953L1428.9 391.608ZM1428.04 322.2L1429.69 323.33L1429.69 323.33L1428.04 322.2ZM1459.72 297.72L1458.94 295.875L1458.94 295.879L1459.72 297.72ZM1551.88 293.4L1551.42 295.348L1551.44 295.352L1551.46 295.356L1551.88 293.4ZM1587.3 306.36L1589.15 307.127L1589.83 305.492L1588.29 304.619L1587.3 306.36ZM1566.85 355.608L1565.95 357.393L1567.87 358.364L1568.7 356.375L1566.85 355.608ZM1492.26 362.52L1491.51 364.372L1491.54 364.384L1491.57 364.395L1492.26 362.52ZM1517.89 368.856L1517.51 370.82L1517.52 370.822L1517.89 368.856ZM1556.77 378.936L1556.09 380.816L1556.1 380.821L1556.12 380.826L1556.77 378.936ZM1584.13 397.08L1582.65 398.425L1582.66 398.434L1582.67 398.443L1584.13 397.08ZM1585.28 466.2L1586.92 467.345L1586.93 467.338L1586.93 467.33L1585.28 466.2ZM1553.32 490.68L1554.1 492.521L1554.11 492.516L1553.32 490.68ZM1502.05 497.608C1485.5 497.608 1469.33 495.8 1453.54 492.186L1452.65 496.086C1468.73 499.768 1485.2 501.608 1502.05 501.608V497.608ZM1453.57 492.193C1437.96 488.387 1425.21 483.366 1415.27 477.174L1413.16 480.57C1423.56 487.05 1436.74 492.205 1452.62 496.079L1453.57 492.193ZM1416.04 479.68L1437.93 430.144L1434.27 428.528L1412.38 478.064L1416.04 479.68ZM1435.1 431.066C1444.85 436.724 1455.76 441.297 1467.8 444.793L1468.91 440.951C1457.15 437.535 1446.55 433.084 1437.1 427.606L1435.1 431.066ZM1467.83 444.801C1479.88 448.106 1491.48 449.768 1502.63 449.768V445.768C1491.88 445.768 1480.64 444.166 1468.89 440.943L1467.83 444.801ZM1502.63 449.768C1512.07 449.768 1519.14 448.914 1523.58 447.014L1522 443.338C1518.37 444.894 1512.01 445.768 1502.63 445.768V449.768ZM1523.65 446.982C1525.88 445.92 1527.69 444.553 1528.94 442.821C1530.22 441.066 1530.84 439.042 1530.84 436.824H1526.84C1526.84 438.254 1526.45 439.446 1525.7 440.475C1524.94 441.527 1523.73 442.512 1521.93 443.37L1523.65 446.982ZM1530.84 436.824C1530.84 434.247 1530 431.938 1528.35 429.986C1526.72 428.071 1524.39 426.591 1521.5 425.458L1520.04 429.181C1522.54 430.161 1524.23 431.321 1525.3 432.574C1526.33 433.79 1526.84 435.177 1526.84 436.824H1530.84ZM1521.53 425.468C1516.16 423.281 1507.37 420.948 1495.26 418.449L1494.45 422.367C1506.53 424.86 1515.02 427.135 1520.02 429.172L1521.53 425.468ZM1495.26 418.451C1479.76 415.197 1466.89 411.763 1456.64 408.153L1455.31 411.927C1465.79 415.613 1478.84 419.091 1494.44 422.365L1495.26 418.451ZM1456.67 408.164C1446.61 404.439 1437.85 398.482 1430.38 390.263L1427.42 392.953C1435.31 401.63 1444.6 407.961 1455.28 411.915L1456.67 408.164ZM1430.4 390.279C1423.12 382.094 1419.38 370.995 1419.38 356.76H1415.38C1415.38 371.709 1419.32 383.842 1427.41 392.937L1430.4 390.279ZM1419.38 356.76C1419.38 344.488 1422.81 333.363 1429.69 323.33L1426.39 321.07C1419.05 331.773 1415.38 343.688 1415.38 356.76H1419.38ZM1429.69 323.33C1436.53 313.338 1446.76 305.396 1460.5 299.561L1458.94 295.879C1444.64 301.948 1433.75 310.326 1426.39 321.07L1429.69 323.33ZM1460.49 299.565C1474.39 293.742 1491.3 290.792 1511.27 290.792V286.792C1490.92 286.792 1473.46 289.794 1458.94 295.875L1460.49 299.565ZM1511.27 290.792C1524.94 290.792 1538.33 292.311 1551.42 295.348L1552.33 291.452C1538.93 288.345 1525.24 286.792 1511.27 286.792V290.792ZM1551.46 295.356C1564.73 298.2 1576.34 302.456 1586.32 308.101L1588.29 304.619C1577.91 298.744 1565.9 294.36 1552.3 291.444L1551.46 295.356ZM1585.45 305.593L1565.01 354.841L1568.7 356.375L1589.15 307.127L1585.45 305.593ZM1567.75 353.823C1547.77 343.733 1528.74 338.632 1510.69 338.632V342.632C1527.97 342.632 1546.39 347.515 1565.95 357.393L1567.75 353.823ZM1510.69 338.632C1501.86 338.632 1494.94 339.689 1490.17 341.999C1487.75 343.168 1485.81 344.69 1484.48 346.625C1483.13 348.575 1482.48 350.828 1482.48 353.304H1486.48C1486.48 351.556 1486.93 350.113 1487.77 348.895C1488.62 347.662 1489.96 346.544 1491.91 345.601C1495.87 343.687 1502.05 342.632 1510.69 342.632V338.632ZM1482.48 353.304C1482.48 355.79 1483.3 358.024 1484.9 359.922C1486.47 361.783 1488.73 363.239 1491.51 364.372L1493.02 360.668C1490.61 359.689 1488.98 358.553 1487.96 357.342C1486.97 356.168 1486.48 354.85 1486.48 353.304H1482.48ZM1491.57 364.395C1496.91 366.377 1505.6 368.513 1517.51 370.82L1518.27 366.892C1506.38 364.591 1497.97 362.503 1492.96 360.644L1491.57 364.395ZM1517.52 370.822C1532.82 373.689 1545.66 377.024 1556.09 380.816L1557.46 377.056C1546.76 373.168 1533.69 369.783 1518.26 366.89L1517.52 370.822ZM1556.12 380.826C1566.36 384.362 1575.19 390.22 1582.65 398.425L1585.61 395.735C1577.71 387.044 1568.31 380.806 1557.43 377.046L1556.12 380.826ZM1582.67 398.443C1590.11 406.431 1593.94 417.415 1593.94 431.64H1597.94C1597.94 416.681 1593.9 404.625 1585.6 395.717L1582.67 398.443ZM1593.94 431.64C1593.94 443.912 1590.51 455.037 1583.63 465.07L1586.93 467.33C1594.27 456.627 1597.94 444.712 1597.94 431.64H1593.94ZM1583.64 465.055C1576.8 474.86 1566.47 482.811 1552.52 488.844L1554.11 492.516C1568.58 486.261 1579.56 477.892 1586.92 467.345L1583.64 465.055ZM1552.54 488.839C1538.83 494.658 1522.03 497.608 1502.05 497.608V501.608C1522.4 501.608 1539.77 498.606 1554.1 492.521L1552.54 488.839Z" fill={color}/>
        </svg>

    );
};

export default RecentProjects;
