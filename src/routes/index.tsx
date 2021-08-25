import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// import pages
import Home from "./Home";
import Contact from "./Contact";
import NotFound from "./NotFound";

// import components
import HeaderFixed from "../components/header/headerFixed";

const Routes: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <HeaderFixed />
            <Switch>
                {/* AUTHENTICATED ROUTES */}

                {/* PUBLIC ROUTES */}
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/" component={Home} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
