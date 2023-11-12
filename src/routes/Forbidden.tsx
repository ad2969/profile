import React from "react";
import { useNavigate } from "react-router-dom";

const Forbidden: React.FunctionComponent = () => {
    const navigate = useNavigate();

    return (
        <div className="Forbidden">
            <h1>403: Forbidden</h1>
            <p>Sorry! The current account does not have the necessary permissions to access the page.</p>
            <p><button color="primary" onClick={() => navigate(-1)}>Go Back</button></p>
        </div>
    );
};

export default Forbidden;
