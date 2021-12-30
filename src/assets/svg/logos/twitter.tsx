import React from "react";

import { SvgProps } from "../svgtypes";

const TwitterLogo: React.FunctionComponent<SvgProps> = ({ color = "#000", ...rest }) => {
    return (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" { ...rest }>
            <path d="M39 17.0114C37.9118 17.779 36.7069 18.3661 35.4318 18.7501C34.7474 17.9631 33.8379 17.4054 32.8262 17.1523C31.8145 16.8991 30.7494 16.9628 29.7751 17.3347C28.8008 17.7066 27.9641 18.3687 27.3784 19.2316C26.7926 20.0944 26.486 21.1164 26.5 22.1592V23.2955C24.503 23.3473 22.5242 22.9044 20.7398 22.0063C18.9554 21.1081 17.4208 19.7826 16.2727 18.1478C16.2727 18.1478 11.7273 28.3751 21.9545 32.9205C19.6142 34.5091 16.8263 35.3057 14 35.1932C24.2273 40.8751 36.7273 35.1932 36.7273 22.1251C36.7262 21.8085 36.6958 21.4928 36.6364 21.1819C37.7961 20.0381 38.6146 18.5941 39 17.0114V17.0114Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default TwitterLogo;
