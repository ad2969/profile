import React from "react";

import Header from "../header";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const SinglePageLayout: React.FunctionComponent<Props> = ({ children }) => {
    return (
        <div className="Page--single">
            <Header />
            <div className="Content">
                {children}
            </div>
        </div>
    );
};

export default SinglePageLayout;
