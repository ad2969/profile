import React from "react";
import { useHistory } from "react-router-dom";

import HeaderFixed from "components/header/headerFixed";
import "./styles.scss";

const NotFound: React.FunctionComponent = () => {
    const history = useHistory();

    return (
        <React.Fragment>
            <HeaderFixed />
            <div className="NotFound">
                <div className="content">
                    <h1>404: Page Not Found</h1>
                    <p>Sorry! The current account does not have the necessary permissions to access the page.</p>
                    <p><button color="primary" onClick={() => history.goBack()}>Go Back</button></p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NotFound;
