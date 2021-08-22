import React from "react";

import HeaderFixed from "../header/headerFixed";
import HeaderLogo from "../header/headerLogo";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const MagazinePageLayout: React.FunctionComponent<Props> = ({ children, className = "", ...rest }) => {
    return (
        <div className={"Page--magazine " + className} {...rest}>
            <HeaderFixed />
            <div className="Content">
                <HeaderLogo />
                {children}
            </div>
        </div>
    );
};

export default MagazinePageLayout;
