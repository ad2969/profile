import React, { useLayoutEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { onValue } from "firebase/database";
import { statusDbRef } from "../../services/firebase";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import HeaderLogo from "../../components/header/headerLogo";
import City from "./city";
import ContactInfo from "./Info";
import ContactStatus from "./Status";

import COLORS from "../../styles/themes/_default.module.scss";
import "./styles.scss";

const Contact: React.FunctionComponent = () => {
    const history = useHistory();
    const doScroll = history.location.search.includes("status");

    const [statusLoaded, setStatusLoaded] = useState(false);
    const [status, setStatus] = useState(false);

    onValue(statusDbRef, (snapshot) => {
        if (!statusLoaded) setStatusLoaded(true);

        const newStatus = snapshot.val();
        // eslint-disable-next-line
        console.log("status change detected! update to:", newStatus);
        if (newStatus !== status) setStatus(newStatus);
    });

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
            id: "divider-scroll",
            scrub: true
        };

        gsap.to("#contact-mouse-scroll", {
            opacity: 0,
            duration: 2,
            scrollTrigger
        });

        gsap.to(".contact-info__more-links .tooltip-button__tooltip", {
            background: status ? COLORS.primary : COLORS.accent,
            "--background": status ? COLORS.primary : COLORS.accent,
            color: COLORS.white,
            scrollTrigger
        });

        gsap.to(".contact-info__more-links .tooltip-button__icon", {
            borderColor: status ? COLORS.primary : COLORS.accent,
            "--background-hover": status ? COLORS.primary : COLORS.accent,
            "--stroke-hover": COLORS.white,
            scrollTrigger
        });

        gsap.to(".contact-info__more-links .tooltip-button__icon path", {
            stroke: status ? COLORS.primary : COLORS.accent,
            scrollTrigger
        });
    }, [status, statusLoaded]);

    return (
        <div className="Contact">
            <HeaderLogo />
            <div className="city">
                <City status={status}/>
            </div>
            <ContactInfo statusLoaded={statusLoaded} />
            {statusLoaded && <div className="contact-divider" id="contact-divider"></div>}
            {statusLoaded && <ContactStatus status={status} doScroll={doScroll}/>}
        </div>
    );
};

export default Contact;
