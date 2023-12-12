import React, { useContext } from "react";

import NotFound from "./NotFound";
import Forbidden from "./Forbidden";
import { AuthContext } from "context/authContext";

interface Props {
    component?: React.ReactNode;
    altComponent?: React.ReactNode;
}

// Route Wrapper that checks first if the user has been authenticated
const AuthRoute: React.FunctionComponent<Props> = ({
    component, altComponent
}) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (isAuthenticated === true) {
        if (component) return component;
        else return <NotFound/>;
    }

    if (component) return altComponent;
    else return <Forbidden/>;
};

export default AuthRoute;
