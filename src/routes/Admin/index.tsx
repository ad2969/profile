import React from "react";

// import pages

import AdminLoggedIn from "./loggedIn";

// import components
import HeaderFixed from "components/header/headerFixed";

const AdminRoutes: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <HeaderFixed variation="none" />
            <AdminLoggedIn />
        </React.Fragment>
    );
};

export default AdminRoutes;
