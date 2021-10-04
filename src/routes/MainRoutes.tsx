import React from "react";
import { Route, Switch } from "react-router-dom";

// import pages
import About from "./About";
import Contact from "./Contact";

// import components
import HeaderFixed from "../components/header/headerFixed";

const MainRoutes: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <HeaderFixed />
            <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </React.Fragment>
    );
};

export default MainRoutes;
