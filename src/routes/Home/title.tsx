import React from "react";

interface Props {
    main: string;
    sub: string;
}

const Title: React.FunctionComponent<Props> = ({ main, sub }) => {
    return (
        <div className="home-title">
            <span className="home-title__main-text t--uppercase t--bold">{main}</span>
            <span className="home-title__sub-text">{sub}</span>
        </div>
    );
};

export default Title;
