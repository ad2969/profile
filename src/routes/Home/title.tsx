import React from "react";

interface Props {
    main: string;
    sub: string;
}

const Title: React.FunctionComponent<Props> = ({ main, sub }) => {
    return (
        <div className="home-title">
            <div className="home-title__main-text t--uppercase t--bold">{main}</div>
            <div className="home-title__sub-text">{sub}</div>
            <div className="home-title__line"><hr/></div>
        </div>
    );
};

export default Title;
