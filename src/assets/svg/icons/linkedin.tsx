import React from "react";

import { SvgProps } from "../svgtypes";

const LinkedinLogo: React.FunctionComponent<SvgProps> = ({ color = "#000", ...rest }) => {
    return (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" { ...rest }>
            <path d="M32.4999 22.5C34.4891 22.5 36.3967 23.2902 37.8032 24.6967C39.2097 26.1032 39.9999 28.0108 39.9999 29.9999V38.7499H34.9999V29.9999C34.9999 29.3369 34.7365 28.701 34.2677 28.2322C33.7989 27.7634 33.163 27.5 32.4999 27.5C31.8369 27.5 31.201 27.7634 30.7322 28.2322C30.2634 28.701 30 29.3369 30 29.9999V38.7499H25V29.9999C25 28.0108 25.7902 26.1032 27.1967 24.6967C28.6032 23.2902 30.5108 22.5 32.4999 22.5V22.5Z" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 23.7499H20V38.7498H15V23.7499Z" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.5 20C18.8807 20 20 18.8807 20 17.5C20 16.1193 18.8807 15 17.5 15C16.1193 15 15 16.1193 15 17.5C15 18.8807 16.1193 20 17.5 20Z" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default LinkedinLogo;
