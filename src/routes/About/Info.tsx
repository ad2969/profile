import React from "react";

// import Leenk from "../../components/buttons/leenk";

import MusclesImage from "../../assets/images/humanoid/muscles.png";
import CirculatoryImage from "../../assets/images/humanoid/circulatory.png";
import SkeletonImage from "../../assets/images/humanoid/skeleton.png";

const Info: React.FunctionComponent = () => {
    const imageLayerHover = (variant) => {
        document.getElementById(`about-me__strengths--${variant}`)?.classList.toggle("active");
    };

    return (
        <div className="about-me">
            <div className="about-me__introduction-content">
                <div className="about-me__humanoid-image" id="humanoid-image-wrapper">
                    <img className="about-me__humanoid-image--muscles"
                        src={MusclesImage} alt="humanoid-1" draggable="false"
                        onMouseEnter={() => imageLayerHover("muscles")} onMouseLeave={() => imageLayerHover("muscles")}/>
                    <img className="about-me__humanoid-image--circulatory"
                        src={CirculatoryImage} alt="humanoid-2" draggable="false"
                        onMouseEnter={() => imageLayerHover("circulatory")} onMouseLeave={() => imageLayerHover("circulatory")}/>
                    <img className="about-me__humanoid-image--skeleton"
                        src={SkeletonImage} alt="humanoid-3" draggable="false"
                        onMouseEnter={() => imageLayerHover("skeleton")} onMouseLeave={() => imageLayerHover("skeleton")}/>
                </div>
                <div className="about-me__introduction" id="about-me__introduction">
                    <p className="scrollTrigger-fadeRight"><span className="t--bold">Hello, I&apos;m Clarence.</span></p>
                    <p className="scrollTrigger-fadeRight"><span className="t--bold">A tinkerer at heart</span>, I enjoy learning about how things work and using my knowledge to build them. It was only a matter of time before I learned how to code and was fascinated by how easy and quick it allows the average person to build useful things.</p>
                    <p className="scrollTrigger-fadeRight"><span className="t--bold">Today</span>, I am an Electrical Engineering student at UBC and a budding software developer who specializes in web applications.</p>
                    <p className="scrollTrigger-fadeRight"><span className="t--bold">I strive to be</span> a technologist who is always on the forefront of new technologies and is able to apply them to solve real world problems.</p>
                    <br />

                    {/* <li>1st Place in <Leenk href="https://www.facebook.com/BizTechUBC/posts/-we-are-excited-to-announce-the-winning-teams-for-deloitte-thinktech-2020-congra/3797002770330706/">Deloitte ThinkTECH (2020)</Leenk></li>
                    <li>1st Place in <Leenk href="https://devpost.com/software/university-path-explorer">OakHacks (2020)</Leenk></li>
                    <li>1st Place in Biztech Innovation Night (2020)</li>
                    <li>Wolfram Award Winner in <Leenk href="https://devpost.com/software/nudge-txm34z">nwHacks (2020)</Leenk></li>

                    <li>Mentor for Hack the North (2021)</li>
                    <li>Lead Developer at VIBEVENT (2020)</li>
                    <li>Software Developer at UBC Biztech (2020)</li>
                    <li>Mobile Developer at Code the Change Foundation (2020)</li>
                    <li>Unity Developer at Emerging Media Lab (2019)</li>
                    <li>VP Marketing at Unlimited Dance Club (2019)</li> */}
                </div>
            </div>

            <div className="about-me__strengths-content" id="about-me__strengths">
                <div className="about-me__humanoid-image strengths"></div>
                <div className="about-me__strengths" >
                    <p className="about-me__strengths__title t--bold scrollTrigger-fadeRight">People Describe Me To Be</p>

                    <p className="scrollTrigger-fadeRight" id="about-me__strengths--skeleton">
                        <span className="taitul t--bold">CURIOUS.</span>&nbsp;
                        I love learning new things and gaining new perspectives. I believe that curiosity is what drives human achievement and I am always in a constant search to establish a deeper understanding of the world and how it works.
                    </p>

                    <p className="scrollTrigger-fadeRight" id="about-me__strengths--circulatory">
                        <span className="taitul t--bold">DEDICATED.</span>&nbsp;
                        I am willing to go the extra mile to ensure that the challenges I take on are completed to satisfaction. I take pride in the work I do and strive to exceed the average.
                    </p>

                    <p className="scrollTrigger-fadeRight" id="about-me__strengths--muscles">
                        <span className="taitul t--bold">ORGANIZED.</span>&nbsp;
                        I am exceptionally great at planning and maintaining organization. I enjoy streamlining processes to optimize efficiency.
                    </p>
                </div>
            </div>
        </div>);
};

export default Info;
