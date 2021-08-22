import React from "react";

import { SvgProps } from "./svgtypes";

const SpotifyLogo: React.FunctionComponent<SvgProps> = ({ color = "#000", ...rest }) => {
    return (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" { ...rest }>
            <path d="M26.5 15C24.0277 15 21.611 15.7331 19.5554 17.1066C17.4998 18.4801 15.8976 20.4324 14.9515 22.7165C14.0054 25.0005 13.7579 27.5139 14.2402 29.9386C14.7225 32.3634 15.913 34.5907 17.6612 36.3388C19.4093 38.087 21.6366 39.2775 24.0614 39.7598C26.4861 40.2421 28.9995 39.9946 31.2835 39.0485C33.5676 38.1024 35.5199 36.5002 36.8934 34.4446C38.2669 32.389 39 29.9723 39 27.5C38.9962 24.1859 37.6781 21.0087 35.3347 18.6653C32.9913 16.3219 29.8141 15.0038 26.5 15V15ZM26.5 38.0769C24.4081 38.0769 22.3631 37.4566 20.6238 36.2944C18.8844 35.1322 17.5287 33.4803 16.7282 31.5476C15.9277 29.6149 15.7182 27.4883 16.1263 25.4365C16.5344 23.3848 17.5418 21.5002 19.021 20.021C20.5002 18.5418 22.3848 17.5344 24.4365 17.1263C26.4883 16.7182 28.6149 16.9277 30.5476 17.7282C32.4803 18.5287 34.1322 19.8844 35.2944 21.6238C36.4566 23.3631 37.0769 25.4081 37.0769 27.5C37.0737 30.3042 35.9584 32.9926 33.9755 34.9755C31.9926 36.9584 29.3042 38.0737 26.5 38.0769V38.0769ZM33.501 25.5752C33.3844 25.802 33.1825 25.9732 32.9397 26.0512C32.6969 26.1291 32.4331 26.1074 32.2063 25.9909C30.4383 25.0859 28.4804 24.6144 26.4942 24.6153C24.5081 24.6163 22.5507 25.0896 20.7835 25.9963C20.5571 26.1104 20.2948 26.1305 20.0537 26.0522C19.8126 25.9738 19.6122 25.8035 19.496 25.5781C19.3799 25.3527 19.3574 25.0906 19.4336 24.8488C19.5098 24.607 19.6783 24.405 19.9026 24.2869C21.9419 23.24 24.201 22.6934 26.4933 22.6923C28.7856 22.6912 31.0452 23.2356 33.0855 24.2805C33.3122 24.3971 33.4834 24.599 33.5613 24.8418C33.6393 25.0846 33.6175 25.3484 33.501 25.5752V25.5752ZM31.7189 28.9845C31.6029 29.2116 31.4015 29.3834 31.159 29.4621C30.9164 29.5407 30.6525 29.5198 30.4254 29.404C29.2079 28.7836 27.8607 28.4607 26.4943 28.4616C25.128 28.4624 23.7812 28.7871 22.5645 29.409C22.452 29.4679 22.3289 29.5039 22.2024 29.515C22.0759 29.5261 21.9484 29.512 21.8274 29.4735C21.7063 29.435 21.5941 29.3729 21.4972 29.2909C21.4003 29.2088 21.3206 29.1083 21.2627 28.9952C21.2048 28.8822 21.1699 28.7588 21.16 28.6322C21.1501 28.5055 21.1654 28.3782 21.205 28.2575C21.2445 28.1368 21.3076 28.0252 21.3906 27.929C21.4736 27.8328 21.5748 27.7541 21.6883 27.6972C23.1759 26.9367 24.8225 26.5396 26.4932 26.5385C28.1639 26.5374 29.811 26.9324 31.2995 27.691C31.412 27.7484 31.5121 27.8274 31.594 27.9234C31.676 28.0195 31.7382 28.1307 31.7772 28.2509C31.8161 28.371 31.831 28.4976 31.821 28.6235C31.8111 28.7493 31.7764 28.872 31.719 28.9845H31.7189ZM29.9404 32.3867C29.8838 32.4996 29.8056 32.6002 29.7101 32.6829C29.6147 32.7656 29.5038 32.8286 29.384 32.8684C29.2641 32.9083 29.1376 32.9241 29.0117 32.915C28.8857 32.9059 28.7628 32.872 28.6499 32.8154C27.9808 32.4808 27.2429 32.3069 26.4949 32.3078C25.7468 32.3086 25.0093 32.4841 24.341 32.8202C24.2282 32.877 24.1054 32.9111 23.9795 32.9205C23.8535 32.9298 23.727 32.9143 23.6071 32.8747C23.4871 32.8352 23.3762 32.7724 23.2805 32.69C23.1849 32.6076 23.1064 32.5071 23.0495 32.3943C22.9927 32.2816 22.9586 32.1587 22.9493 32.0328C22.9399 31.9069 22.9554 31.7803 22.995 31.6604C23.0345 31.5405 23.0973 31.4295 23.1797 31.3339C23.2621 31.2382 23.3626 31.1597 23.4754 31.1029C24.4115 30.6317 25.4447 30.3857 26.4927 30.3846C27.5407 30.3834 28.5745 30.6272 29.5117 31.0963C29.7396 31.2105 29.9128 31.4107 29.9932 31.6527C30.0736 31.8947 30.0546 32.1587 29.9404 32.3867V32.3867Z" fill={color}/>
        </svg>

    );
};

export default SpotifyLogo;
