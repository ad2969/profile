import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { onValue } from "firebase/database";
import { statusDbRef } from "../../services/firebase";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import HeaderFixed from "../../components/header/headerFixed";
import City from "./city";
import ContactInfo from "./Info";
import ContactStatus from "./Status";

import "./styles.scss";

const Contact: React.FunctionComponent = () => {
    const location = useLocation();
    const doScroll = location.search.includes("status");

    const [statusLoaded, setStatusLoaded] = useState(false);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        onValue(statusDbRef, (snapshot) => {
            if (!statusLoaded) setStatusLoaded(true);

            const newStatus = snapshot.val();
            setStatus(newStatus);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useLayoutEffect(() => {
        // don't initialize if status not loaded
        if (!statusLoaded) return;

        // reset all scroll trigger stuff
        const allTriggers = ScrollTrigger.getAll();
        allTriggers.forEach((trigger) => {
            trigger.kill(true);
        });

        // activate scroll trigger stuff
        const scrollTrigger = {
            trigger: "#contact-divider",
            start: "top center",
            end: "bottom top",
            id: "contact-divider-scroll",
            scrub: true
        };

        gsap.to("#contact-mouse-scroll", {
            opacity: 0,
            duration: 2,
            scrollTrigger
        });
    }, [status, statusLoaded]);

    return (<>
        <HeaderFixed/>
        <div className="Route Contact">
            <div className="city">
                <City status={status}/>
            </div>
            <ContactInfo statusLoaded={statusLoaded} />
            {statusLoaded && <div className="contact-divider" id="contact-divider"></div>}
            {statusLoaded && <ContactStatus status={status} doScroll={doScroll}/>}
        </div>
    </>);
};

export default Contact;
