import React from "react";

import HeaderFixed from "../header/headerFixed";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variation?: string;
}

const SinglePageLayout: React.FunctionComponent<Props> = ({ children, variation, className = "", ...rest }) => {
    return (
        <div className={"Page--single " + className} {...rest}>
            <HeaderFixed variation={variation} />
            <div className="Content">
                {children}
            </div>
        </div>
    );
};

export default SinglePageLayout;
