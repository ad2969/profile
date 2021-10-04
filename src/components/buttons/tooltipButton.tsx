import React, { useState } from "react";

import { SvgProps } from "../../assets/svg/svgtypes";
import COLORS from "../../styles/themes/_default.module.scss";
import "./styles.scss";

interface Props {
    strokeColor?: string;
    hoverColor?: string;
    icon: React.ComponentType<SvgProps>;
    url?: string;
    tooltipText: string;
    direction?: "left" | "right"
}

const TooltipButton: React.FunctionComponent<Props> = ({
    strokeColor = COLORS.black, hoverColor = COLORS.white, icon: Icon, url = "", tooltipText, direction = "left"
}) => {
    const [isHover, setIsHover] = useState(false);

    const mouseClickHandler = () => {
        window.open(url, "_blank");
    };

    return (
        <div className="tooltip-button">
            <span
                className={`tooltip-button__tooltip ${direction} ${isHover ? "active" : ""}`}
                style={{
                    background: strokeColor,
                    color: hoverColor,
                    // @ts-ignore
                    "--background": strokeColor
                }}
            >
                {tooltipText}</span>
            <Icon
                color={strokeColor}
                className="tooltip-button__icon button"
                style={{
                    borderColor: strokeColor,
                    // @ts-ignore
                    "--stroke-hover": hoverColor,
                    // @ts-ignore
                    "--background-hover": strokeColor
                }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={url ? mouseClickHandler : () => {}}
            />
        </div>
    );
};

export default TooltipButton;
