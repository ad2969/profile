import React from "react";

import { SvgProps } from "../svgtypes";

const FacebookLogo: React.FunctionComponent<SvgProps> = ({ color = "#000", ...rest }) => {
    return (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" { ...rest }>
            <path d="M33.75 15H30C28.3424 15 26.7527 15.6585 25.5806 16.8306C24.4085 18.0027 23.75 19.5924 23.75 21.25V25H20V30H23.75V40H28.75V30H32.5L33.75 25H28.75V21.25C28.75 20.9185 28.8817 20.6005 29.1161 20.3661C29.3505 20.1317 29.6685 20 30 20H33.75V15Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default FacebookLogo;
