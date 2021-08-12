import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import AuthRoute from "./AuthRoute";

import Header from "../components/header";

// import pages
import Home from "./Home";
import AuthHome from "./AuthHome";
import NotFound from "./NotFound";

interface Props {

}

const Routes: React.FunctionComponent<Props> = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                {/* AUTHENTICATED ROUTES */}
                <AuthRoute path="/" component={AuthHome} />

                {/* PUBLIC ROUTES */}
                <Route exact path="/" component={Home} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
