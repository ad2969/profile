import React from "react";
import { Switch } from "react-router-dom";
import AuthRoute from "../AuthRoute";

// import pages

import AdminLoggedIn from "./loggedIn";
import AdminNotLoggedIn from "./notLoggedIn";

// import components
import HeaderFixed from "components/header/headerFixed";

const AdminRoutes: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <HeaderFixed variation="none" />
            <Switch>
                <AuthRoute
                    isAuthenticated={true}
                    path="/admin"
                    component={<AdminLoggedIn />}
                    altComponent={<AdminNotLoggedIn />}
                    exact
                />
            </Switch>
        </React.Fragment>
    );
};

export default AdminRoutes;
