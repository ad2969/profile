import React from "react";

// import Leenk from "../../components/buttons/leenk";

import MusclesImage from "../../assets/images/humanoid/muscles.png";
import CirculatoryImage from "../../assets/images/humanoid/circulatory.png";
import SkeletonImage from "../../assets/images/humanoid/skeleton.png";
import "./humanoid.scss";

const HumanoidHome: React.FunctionComponent = () => {
    const imageLayerHover = (variant) => {
        document.getElementById(`home-about__strengths--${variant}`)?.classList.toggle("active");
    };

    return (
        <div className="home-about">
            <div className="home-about__humanoid-image" id="humanoid-image-wrapper">
                <img className="home-about__humanoid-image--muscles"
                    src={MusclesImage} alt="humanoid-1" draggable="false"
                    onMouseEnter={() => imageLayerHover("muscles")} onMouseLeave={() => imageLayerHover("muscles")}/>
                <img className="home-about__humanoid-image--circulatory"
                    src={CirculatoryImage} alt="humanoid-2" draggable="false"
                    onMouseEnter={() => imageLayerHover("circulatory")} onMouseLeave={() => imageLayerHover("circulatory")}/>
                <img className="home-about__humanoid-image--skeleton"
                    src={SkeletonImage} alt="humanoid-3" draggable="false"
                    onMouseEnter={() => imageLayerHover("skeleton")} onMouseLeave={() => imageLayerHover("skeleton")}/>
            </div>
            <div className="home-about__strengths-content" id="home-about__strengths">
                <div className="home-about__humanoid-image strengths"></div>
                <div className="home-about__strengths" >
                    <p className="scrollTrigger-fadeRight" id="home-about__strengths--skeleton">
                        <span className="taitul t--bold">Electrical engineering</span>&nbsp;
                        student at the University of British Columbia.
                    </p>

                    <p className="scrollTrigger-fadeRight" id="home-about__strengths--circulatory">
                        <span className="taitul t--bold">Front-end Developer at Skyrocket Digital</span>,&nbsp;
                        a digital branding agency. Previously a full-stack developer at Semios.
                    </p>

                    <p className="scrollTrigger-fadeRight" id="home-about__strengths--muscles">
                        <span className="taitul t--bold">Learner of things</span>,&nbsp;
                        currently studying various subjects such as UX Design, systems design, internet of things.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HumanoidHome;
