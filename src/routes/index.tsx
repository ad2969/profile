import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// import { getAuth, onAuthStateChanged } from "firebase/auth";

// import groups of other routes
import MainRoutes from "./MainRoutes";

import AdminRoutes from "./Admin";
import Home from "./Home";
import NotFound from "./NotFound";

const Routes: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* AUTHENTICATED ROUTES */}
                <Route path="/admin" component={AdminRoutes} />

                {/* PUBLIC ROUTES */}
                <Route exact path="/" component={Home} />
                <Route path="/" component={MainRoutes} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
