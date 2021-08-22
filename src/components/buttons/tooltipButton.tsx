import React, { useState } from "react";

import { SvgProps } from "../../assets/svg/svgtypes";
import "./styles.scss";

interface Props {
    strokeColor?: string;
    hoverColor?: string;
    icon: React.ComponentType<SvgProps>;
    url?: string;
    tooltipText: string;
}

const TooltipButton: React.FunctionComponent<Props> = ({
    strokeColor = "#000", hoverColor = "#fff", icon: Icon, url = "", tooltipText
}) => {
    const [isHover, setIsHover] = useState(false);

    const mouseClickHandler = () => {
        window.open(url, "_blank");
    };

    return (
        <div className="tooltip-button">
            <span className={`tooltip-button__tooltip ${isHover ? "active" : ""}`}>{tooltipText}</span>
            <Icon
                color={isHover ? hoverColor : strokeColor}
                className="tooltip-button__icon button"
                style={{
                    borderColor: strokeColor,
                    backgroundColor: isHover ? strokeColor : "transparent"
                }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={url ? mouseClickHandler : () => {}}
            />
        </div>
    );
};

export default TooltipButton;
