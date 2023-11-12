import React from "react";
import { Route } from "react-router-dom";

import NotFound from "./NotFound";
import Forbidden from "./Forbidden";

interface Props {
    isAuthenticated?: boolean;
    component?: React.ReactNode;
    altComponent?: React.ReactNode;

    path: string;
    caseSensitive?: boolean;
    sensitive?: boolean;
    strict?: boolean;
}

// Route Wrapper that checks first if the user has been authenticated
const AuthRoute: React.FunctionComponent<Props> = ({
    isAuthenticated, component, altComponent, ...rest
}) => {
    if (isAuthenticated === true) {
        if (component) return <Route {...rest} element={component} />;
        else return <Route {...rest} element={<NotFound/>} />;
    }

    if (component) return <Route {...rest} element={altComponent} />;
    else return <Route {...rest} element={<Forbidden/>} />;
};

export default AuthRoute;
