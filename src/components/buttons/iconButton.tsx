import React from "react";

import { SvgProps } from "../../assets/svg/svgtypes";
import COLORS from "../../styles/themes/_default.module.scss";
import "./styles.scss";

interface Props {
    strokeColor?: string;
    strokeHoverColor?: string;
    icon: React.ComponentType<SvgProps>;
    url?: string;
    direction?: string;
}

const IconButton: React.FunctionComponent<Props> = ({
    strokeColor = COLORS.white, strokeHoverColor = COLORS.white, icon: Icon, url = "", direction = "ttb"
}) => {
    const mouseClickHandler = () => {
        window.open(url, "_blank");
    };

    return (
        <Icon
            color={strokeColor}
            className={`icon-button icon-button--${direction} button`}
            style={{
                borderColor: strokeColor,
                // @ts-ignore
                "--stroke-hover": strokeHoverColor,
                // @ts-ignore
                "--background-hover": strokeColor
            }}
            onClick={url ? mouseClickHandler : () => {}}
        />
    );
};

export default IconButton;
