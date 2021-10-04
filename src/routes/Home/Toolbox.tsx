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
            <div className="home-toolbox__icons scrollTrigger-fadeUp">
                {/* TODO: LINK TO EACH SECTION HIGHLIGHTS */}

                <div className="home-toolbox__icon">
                    <DevelopmentIcon color="currentColor"/>
                    <span>Development</span>
                </div>
                <div className="home-toolbox__icon">
                    <ProductDesignIcon color="currentColor"/>
                    <span>Product Design</span>
                </div>
                <div className="home-toolbox__icon">
                    <EngineeringIcon color="currentColor"/>
                    <span>Engineering</span>
                </div>
                <div className="home-toolbox__icon">
                    <PMIcon color="currentColor"/>
                    <span>Project Management</span>
                </div>
            </div>
            <div className="home-toolbox__icons tiny scrollTrigger-fadeUp">
                <div className="home-toolbox__icon-tiny">
                    <WebApplicationsIcon color="currentColor"/>
                    <span>Web Applications</span>
                </div>
                <div className="home-toolbox__icon-tiny">
                    <MobileApplicationsIcon color="currentColor"/>
                    <span>Mobile Applications</span>
                </div>
                <div className="home-toolbox__icon-tiny">
                    <GitIcon color="currentColor"/>
                    <span>Git</span>
                </div>
                <div className="home-toolbox__icon-tiny">
                    <EmbeddedSystemsIcon color="currentColor"/>
                    <span>Embedded Systems</span>
                </div>
                <div className="home-toolbox__icon-tiny">
                    <DBDesignIcon color="currentColor"/>
                    <span>DB Design</span>
                </div>
                <div className="home-toolbox__icon-tiny">
                    <CloudServicesIcon color="currentColor"/>
                    <span>Cloud Services</span>
                </div>
                <div className="home-toolbox__icon-tiny">
                    <UserExperienceIcon color="currentColor"/>
                    <span>User Experience</span>
                </div>
                <div className="home-toolbox__icon-tiny">
                    <InformationArchitectureIcon color="currentColor"/>
                    <span>Information Architecture</span>
                </div>
                <div className="home-toolbox__icon-tiny">
                    <UserJourneyIcon color="currentColor"/>
                    <span>User Journey</span>
                </div>
                <div className="home-toolbox__icon-tiny">
                    <UserPersonaIcon color="currentColor"/>
                    <span>User Persona</span>
                </div>
                <div className="home-toolbox__icon-tiny">
                    <DataStructuresIcon color="currentColor"/>
                    <span>Data Structures</span>
                </div>
                <div className="home-toolbox__icon-tiny">
                    <AlgorithmsIcon color="currentColor"/>
                    <span>Algorithms</span>
                </div>
                <div className="home-toolbox__icon-tiny">
                    <AgileIcon color="currentColor"/>
                    <span>Agile</span>
                </div>
                <div className="home-toolbox__icon-tiny">
                    <WaterfallIcon color="currentColor"/>
                    <span>Waterfall</span>
                </div>
                <div className="home-toolbox__icon-tiny">
                    <MarketResearchIcon color="currentColor"/>
                    <span>Market Research</span>
                </div>
            </div>

            {/* <div className="home-toolbox__button scrollTrigger-fadeUp">
                <Leenk to="/skills">&gt; See a full list of my skills &lt;</Leenk>
            </div> */}
        </div>);
};

export default Toolbox;
