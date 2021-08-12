import React from "react";
import { useHistory } from "react-router-dom";

const Forbidden: React.FunctionComponent = () => {
    const history = useHistory();

    return (
        <div className="Page flex-center">
            <h1>403: Forbidden</h1>
            <p>Sorry! The current account does not have the necessary permissions to access the page.</p>
            <p><button color="primary" onClick={() => history.goBack()}>Go Back</button></p>
        </div>
    );
};

export default Forbidden;
