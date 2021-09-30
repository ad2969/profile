import React from "react";

const AdminNotLoggedIn: React.FunctionComponent = () => {
    const handleSignIn = async () => {
        // eslint-disable-next-line
        console.log("not setup yet!");
    };

    return (
        <div className="Route Admin">
            <div className="content">
                <h1>Not logged in.</h1>
                <input type="text"/>
                <button onClick={handleSignIn}>Sign In</button>
            </div>
        </div>
    );
};

export default AdminNotLoggedIn;
