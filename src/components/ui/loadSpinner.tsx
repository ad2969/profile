import React from "react";

import COLORS from "../../styles/themes/_default.module.scss";
interface Props {
    color?: string;
}

const LoadSpinner: React.FunctionComponent<Props> = ({ color = COLORS.black }) => {
    return (
        <div
            className="load-spinner-ring"
            style={{
                // @ts-ignore
                "--stroke": color
            }}
        >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default LoadSpinner;
