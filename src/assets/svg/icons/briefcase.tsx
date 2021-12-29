import React from "react";

import { SvgProps } from "../svgtypes";

const BriefcaseIcon: React.FunctionComponent<SvgProps> = ({ color = "#000", ...rest }) => {
    return (
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path d="M33.75 36.5625V11.25M42.1875 11.25H2.8125V36.5625H42.1875V11.25ZM28.125 11.25C28.125 11.25 28.125 5.625 22.5 5.625C16.875 5.625 16.875 11.25 16.875 11.25H28.125ZM11.25 36.5625V11.25V36.5625Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    );
};

export default BriefcaseIcon;
