import React from "react";

import Header from "../header";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const SinglePageLayout: React.FunctionComponent<Props> = ({ children, className = "", ...rest }) => {
    return (
        <div className={"Page--single " + className} {...rest}>
            <Header />
            <div className="Content">
                {children}
            </div>
        </div>
    );
};

export default SinglePageLayout;
