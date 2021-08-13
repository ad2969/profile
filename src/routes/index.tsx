import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// import pages
import Home from "./Home";
import NotFound from "./NotFound";

interface Props {

}

const Routes: React.FunctionComponent<Props> = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* AUTHENTICATED ROUTES */}

                {/* PUBLIC ROUTES */}
                <Route exact path="/" component={Home} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
