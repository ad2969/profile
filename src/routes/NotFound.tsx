import React from "react";
import { useNavigate } from "react-router-dom";

import HeaderFixed from "components/header/headerFixed";
import "./styles.scss";

const NotFound: React.FunctionComponent = () => {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <HeaderFixed />
            <div className="NotFound">
                <div className="content">
                    <h1>404</h1>
                    <p>Woops! The page you&apos;re trying to reach doesn&apos;t exist.</p>
                    <p className="button--scale" onClick={() => navigate(-1)}>&gt; Go Back</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NotFound;
