import React from "react";
import { Route, Switch } from "react-router-dom";

// import pages
import Home from "./Home";
import Contact from "./Contact";
import NotFound from "./NotFound";

// import components
import HeaderFixed from "../components/header/headerFixed";

const MainRoutes: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <HeaderFixed />
            <Switch>
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/" component={Home} />
                <Route path="*" component={NotFound} />
            </Switch>
        </React.Fragment>
    );
};

export default MainRoutes;
