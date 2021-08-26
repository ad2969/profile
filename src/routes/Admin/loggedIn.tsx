import React, { useState, useEffect } from "react";
import { onValue, set } from "firebase/database";
import { statusDbRef } from "../../services/firebase";

import HeaderLogo from "../../components/header/headerLogo";

import "./styles.scss";

const AdminLoggedIn: React.FunctionComponent = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const [statusLoaded, setStatusLoaded] = useState(false);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        onValue(statusDbRef, (snapshot) => {
            if (!statusLoaded) setStatusLoaded(true);

            const newStatus = snapshot.val();
            // eslint-disable-next-line
            console.log("status change detected! update to:", newStatus);
            setStatus(newStatus);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const changeStatus = async () => {
        if (password !== "clarence") {
            setError(true);
            return null;
        }
        set(statusDbRef, !status);
        setError(false);
    };

    return (
        <div className="Admin">
            <HeaderLogo />
            <div className="content">
                <h1>Welcom, Admin!</h1>

                {statusLoaded && <React.Fragment>
                    <h2>Current Status: {status
                        ? <span className="on">ONLINE</span>
                        : <span className="off">AFK</span>
                    }</h2>
                    <input
                        className={error ? "input error" : "input"}
                        type="text" value={password}
                        onChange={(e) => { setPassword(e.currentTarget.value); }}
                    />
                    <button onClick={changeStatus}>Toggle Status</button>
                </React.Fragment>}

                {/* <button onClick={so}>Sign Out</button> */}
            </div>
        </div>
    );
};

export default AdminLoggedIn;
