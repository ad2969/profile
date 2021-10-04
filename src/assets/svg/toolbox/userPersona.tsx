import React from "react";

import { SvgProps } from "../svgtypes";

const UserPersona: React.FunctionComponent<SvgProps> = ({ color = "#000", ...rest }) => {
    return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
            className="feather feather-meh" {...rest}>
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="8" y1="15" x2="16" y2="15"></line>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
    );
};

export default UserPersona;
