import React from "react";

import { SvgProps } from "../svgtypes";

const WebApplications: React.FunctionComponent<SvgProps> = ({ color = "#000", ...rest }) => {
    return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
            className="feather feather-globe" {...rest}>
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
    );
};

export default WebApplications;
