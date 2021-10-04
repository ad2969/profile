import React from "react";

import { SvgProps } from "../svgtypes";

const MobileApplications: React.FunctionComponent<SvgProps> = ({ color = "#000", ...rest }) => {
    return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
            className="feather feather-smartphone" {...rest}>
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
    );
};

export default MobileApplications;
