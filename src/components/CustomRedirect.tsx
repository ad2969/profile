import React, { useEffect } from "react";
import NotFound from "routes/NotFound";

interface Props {
    url: string | undefined;
}

const CustomRedirect: React.FunctionComponent<Props> = ({ url }) => {
    useEffect(() => {
        if (url) window.location.href = url;
    }, [url]);

    if (!url) return <NotFound/>;

    return <div className="Redirect">
        <div className="content">
            <h2>Redirecting...</h2>
        </div>
    </div>;
};

export default CustomRedirect;
