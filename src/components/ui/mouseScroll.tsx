import React from "react";

import "./styles.scss";
import COLORS from "../../styles/themes/_default.module.scss";

interface Props {
    color?: string;
}

const MouseScroll: React.FunctionComponent<Props> = ({ color = COLORS.black }) => {
    return (
        <div className="mouse-scroll" style={{ color }}>
            <div className="mouse-scroll__scroller"></div>
        </div>
    );
};

export default MouseScroll;
