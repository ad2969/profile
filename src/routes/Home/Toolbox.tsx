import React from "react";

import AgileIcon from "../../assets/svg/toolbox/agile";
import AlgorithmsIcon from "../../assets/svg/toolbox/algorithms";
import CloudServicesIcon from "../../assets/svg/toolbox/cloudServices";
import DataStructuresIcon from "../../assets/svg/toolbox/dataStructures";
import DBDesignIcon from "../../assets/svg/toolbox/dbDesign";
import DevelopmentIcon from "../../assets/svg/toolbox/development";
import EmbeddedSystemsIcon from "../../assets/svg/toolbox/embeddedSystems";
import EngineeringIcon from "../../assets/svg/toolbox/engineering";
import GitIcon from "../../assets/svg/toolbox/git";
import InformationArchitectureIcon from "../../assets/svg/toolbox/informationArchitecture";
import MarketResearchIcon from "../../assets/svg/toolbox/marketResearch";
import MobileApplicationsIcon from "../../assets/svg/toolbox/mobileApplications";
import ProductDesignIcon from "../../assets/svg/toolbox/productDesign";
import PMIcon from "../../assets/svg/toolbox/projectManagement";
import UserExperienceIcon from "../../assets/svg/toolbox/userExperience";
import UserJourneyIcon from "../../assets/svg/toolbox/userJourney";
import UserPersonaIcon from "../../assets/svg/toolbox/userPersona";
import WaterfallIcon from "../../assets/svg/toolbox/waterfall";
import WebApplicationsIcon from "../../assets/svg/toolbox/webApplications";

import "./styles.scss";

const Toolbox: React.FunctionComponent = () => {
    return (
        <div className="home-toolbox">
            <h2 className="home-toolbox__title scrollTrigger-fadeUp">Here are some things people say I&apos;m good at:</h2>

            <div className="home-toolbox__icons">
                {/* TODO: LINK TO EACH SECTION HIGHLIGHTS */}

                <div className="home-toolbox__icon scrollTrigger-fadeUp">
                    <DevelopmentIcon color="currentColor"/>
                    <span>Development</span>
                </div>
                <div className="home-toolbox__icon scrollTrigger-fadeUp">
                    <ProductDesignIcon color="currentColor"/>
                    <span>Product Design</span>
                </div>
                <div className="home-toolbox__icon scrollTrigger-fadeUp">
                    <EngineeringIcon color="currentColor"/>
                    <span>Engineering</span>
                </div>
                <div className="home-toolbox__icon scrollTrigger-fadeUp">
                    <PMIcon color="currentColor"/>
                    <span>Project Management</span>
                </div>
            </div>
            <div className="home-toolbox__icons tiny">
                <div className="home-toolbox__icon-tiny scrollTrigger-fadeUp">
                    <WebApplicationsIcon color="currentColor"/>
                    <span>Web Applications</span>
                </div>
                <div className="home-toolbox__icon-tiny scrollTrigger-fadeUp">
                    <MobileApplicationsIcon color="currentColor"/>
                    <span>Mobile Applications</span>
                </div>
                <div className="home-toolbox__icon-tiny scrollTrigger-fadeUp">
                    <GitIcon color="currentColor"/>
                    <span>Git</span>
                </div>
                <div className="home-toolbox__icon-tiny scrollTrigger-fadeUp">
                    <EmbeddedSystemsIcon color="currentColor"/>
                    <span>Embedded Systems</span>
                </div>
                <div className="home-toolbox__icon-tiny scrollTrigger-fadeUp">
                    <DBDesignIcon color="currentColor"/>
                    <span>DB Design</span>
                </div>
                <div className="home-toolbox__icon-tiny scrollTrigger-fadeUp">
                    <CloudServicesIcon color="currentColor"/>
                    <span>Cloud Services</span>
                </div>
                <div className="home-toolbox__icon-tiny scrollTrigger-fadeUp">
                    <UserExperienceIcon color="currentColor"/>
                    <span>User Experience</span>
                </div>
                <div className="home-toolbox__icon-tiny scrollTrigger-fadeUp">
                    <InformationArchitectureIcon color="currentColor"/>
                    <span>Information Architecture</span>
                </div>
                <div className="home-toolbox__icon-tiny scrollTrigger-fadeUp">
                    <UserJourneyIcon color="currentColor"/>
                    <span>User Journey</span>
                </div>
                <div className="home-toolbox__icon-tiny scrollTrigger-fadeUp">
                    <UserPersonaIcon color="currentColor"/>
                    <span>User Persona</span>
                </div>
                <div className="home-toolbox__icon-tiny scrollTrigger-fadeUp">
                    <DataStructuresIcon color="currentColor"/>
                    <span>Data Structures</span>
                </div>
                <div className="home-toolbox__icon-tiny scrollTrigger-fadeUp">
                    <AlgorithmsIcon color="currentColor"/>
                    <span>Algorithms</span>
                </div>
                <div className="home-toolbox__icon-tiny scrollTrigger-fadeUp">
                    <AgileIcon color="currentColor"/>
                    <span>Agile</span>
                </div>
                <div className="home-toolbox__icon-tiny scrollTrigger-fadeUp">
                    <WaterfallIcon color="currentColor"/>
                    <span>Waterfall</span>
                </div>
                <div className="home-toolbox__icon-tiny scrollTrigger-fadeUp">
                    <MarketResearchIcon color="currentColor"/>
                    <span>Market Research</span>
                </div>
            </div>

            {/* <div className="home-divider"></div> */}
            <p className="home-toolbox__end-text scrollTrigger-fadeUp">but I say our skills are only as useful as how we use them.</p>
        </div>);
};

export default Toolbox;
