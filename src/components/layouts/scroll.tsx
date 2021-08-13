import React from "react";

import Header from "../header";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const ScrollPageLayout: React.FunctionComponent<Props> = ({ children, ...rest }) => {
    return (
        <div className="Page--scroll" {...rest}>
            <Header />
            <div className="Content">
                {children}
            </div>
        </div>
    );
};

export default ScrollPageLayout;
