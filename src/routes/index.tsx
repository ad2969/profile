import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

// import { getAuth, onAuthStateChanged } from "firebase/auth";

// import groups of other routes
import Contact from "./Contact";

import AdminRoutes from "./Admin";
import Home from "./Home";
import NotFound from "./NotFound";
import CustomRedirect from "components/CustomRedirect";

const AppRoutes: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* AUTHENTICATED ROUTES */}
                <Route caseSensitive path="/admin" element={<AdminRoutes />} />

                {/* PUBLIC ROUTES */}
                <Route caseSensitive path="/" element={<Home />} />
                <Route caseSensitive path="/contact" element={<Contact />} />
                <Route caseSensitive path="/calendar" element={<CustomRedirect url={process.env.REACT_APP_CALENDAR_URL} />} />
                <Route path="/" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
