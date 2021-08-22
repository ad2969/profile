import React, { useState } from "react";

import { SvgProps } from "../../assets/svg/svgtypes";
import "./styles.scss";

interface Props {
    strokeColor?: string;
    hoverColor?: string;
    icon: React.ComponentType<SvgProps>;
    url?: string;
}

const TwitterLogo: React.FunctionComponent<Props> = ({
    strokeColor = "#000", hoverColor = "#fff", icon: Icon, url = ""
}) => {
    const [isHover, setIsHover] = useState(false);

    const mouseClickHandler = () => {
        window.open(url, "_blank");
    };

    return (
        <Icon
            color={isHover ? hoverColor : strokeColor}
            className="icon-button button"
            style={{
                borderColor: strokeColor,
                backgroundColor: isHover ? strokeColor : "transparent"
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={url ? mouseClickHandler : () => {}}
        />
    );
};

export default TwitterLogo;
