import React from "react";

import { SvgProps } from "../svgtypes";

const Waterfall: React.FunctionComponent<SvgProps> = ({ color = "#000", ...rest }) => {
    return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
            className="feather feather-droplet" {...rest}>
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
        </svg>
    );
};

export default Waterfall;
