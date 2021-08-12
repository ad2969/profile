import React from "react";
import { Route } from "react-router-dom";

import NotFound from "./NotFound";
import Forbidden from "./Forbidden";

interface Props {
    isAuthenticated?: boolean;
    component?: React.FunctionComponent;
    altComponent?: React.FunctionComponent;

    path: string | string[];
    exact?: boolean;
    sensitive?: boolean;
    strict?: boolean;
}

// Route Wrapper that checks first if the user has been authenticated
const AuthRoute: React.FunctionComponent<Props> = ({
    isAuthenticated, component, altComponent, ...rest
}) => {
    return (
        <Route {...rest} render={() => (
            isAuthenticated === true
                ? component || <NotFound />
                : altComponent || <Forbidden />
        )} />
    );
};

export default AuthRoute;
