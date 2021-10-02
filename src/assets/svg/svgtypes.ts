import React from "react";

export interface SvgProps {
    color: string;
    className?: string;
    style?: React.CSSProperties;
    onMouseEnter?: () => void;
    onMouseLeave?:() => void;
    onClick?:() => void;
}
