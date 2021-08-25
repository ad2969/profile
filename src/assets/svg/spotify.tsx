import React from "react";

import { SvgProps } from "./svgtypes";

const SpotifyLogo: React.FunctionComponent<SvgProps> = ({ color = "#000", ...rest }) => {
    return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" { ...rest }>
            <path d="M25 37C31.6274 37 37 31.6274 37 25C37 18.3726 31.6274 13 25 13C18.3726 13 13 18.3726 13 25C13 31.6274 18.3726 37 25 37Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 25.253C23.3333 23.1652 27.3333 23.8739 30 26" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.0421 29.2977C23.125 27.8001 26.6248 27.7599 28.0501 29.954" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 21.3627C21.4 20.088 26.2 18.8133 31 22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default SpotifyLogo;
