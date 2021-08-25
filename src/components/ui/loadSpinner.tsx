import React from "react";

interface Props {
    color?: string;
}

const LoadSpinner: React.FunctionComponent<Props> = ({ color = "#000" }) => {
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
