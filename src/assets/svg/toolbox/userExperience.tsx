import React from "react";

import { SvgProps } from "../svgtypes";

const UserExperience: React.FunctionComponent<SvgProps> = ({ color = "#000", ...rest }) => {
    return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
            className="feather feather-user-check" {...rest}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <polyline points="17 11 19 13 23 9"></polyline>
        </svg>
    );
};

export default UserExperience;
