import React from "react";

import { SvgProps } from "../svgtypes";

const InstagramLogo: React.FunctionComponent<SvgProps> = ({ color = "#000", ...rest }) => {
    return (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" { ...rest }>
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.75 15H20.25C16.7982 15 14 17.7982 14 21.25V33.75C14 37.2018 16.7982 40 20.25 40H32.75C36.2018 40 39 37.2018 39 33.75V21.25C39 17.7982 36.2018 15 32.75 15Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M31.4996 26.7125C31.6539 27.7528 31.4762 28.8153 30.9918 29.7488C30.5075 30.6823 29.7411 31.4393 28.8017 31.9121C27.8623 32.3849 26.7977 32.5495 25.7594 32.3824C24.721 32.2153 23.7618 31.7251 23.0182 30.9815C22.2745 30.2378 21.7843 29.2786 21.6172 28.2403C21.4501 27.202 21.6147 26.1374 22.0875 25.198C22.5604 24.2586 23.3174 23.4922 24.2509 23.0078C25.1844 22.5234 26.2468 22.3457 27.2871 22.5C28.3483 22.6574 29.3307 23.1518 30.0893 23.9104C30.8478 24.6689 31.3423 25.6514 31.4996 26.7125Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M33.375 20.625H33.3875" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </svg>
    );
};

export default InstagramLogo;
