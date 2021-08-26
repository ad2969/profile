import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// import { getAuth, onAuthStateChanged } from "firebase/auth";

// import groups of other routes
import MainRoutes from "./MainRoutes";
import AdminRoutes from "./Admin";

const Routes: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* AUTHENTICATED ROUTES */}
                <Route path="/admin" component={AdminRoutes} />

                {/* PUBLIC ROUTES */}
                <Route path="/" component={MainRoutes} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
