import React from "react";

// import Accordion from "./accordion";
import Leenk from "../../components/buttons/leenk";

import MusclesImage from "../../assets/images/humanoid/muscles.png";
import CirculatoryImage from "../../assets/images/humanoid/circulatory.png";
import SkeletonImage from "../../assets/images/humanoid/skeleton.png";

// interface Props {
//     selectedAccordionIndex: number | null;
//     setSelectedAccordionIndex: any;
// }

const Info: React.FunctionComponent = () => {
    const imageLayerHover = (variant) => {
        document.getElementById(`home-about__strengths--${variant}`)?.classList.toggle("active");
    };

    return (
        <div className="home-about">
            <div className="home-about__my-story scrollTrigger-fadeUp">
                <div className="home-about__my-story__col tagline">
                    <p>I’m an engineering student interested in utilizing innovative technology to improve the quality of human life. Simply put, <span className="t--c3 t--bold">I like to build things.</span></p>
                    <div className="home-about__my-story__col-title t--bold">My Story</div>
                </div>
                <div className="home-about__my-story__col">
                    <p>&#127470;&#127465;&#127464;&#127462; Born and raised in Indonesia, I came to Canada to pursue a higher education and explore a side of the world I had not seen before.</p>
                    <p>&#128187;&#128736; I fell in love with code in my second year of university, when I built my first program to help me manage my financial expenses. Ever since, I&apos;ve developed a love for developing applications and turning them into useful products.</p>
                    <p>&#128104;&#8205;&#128187;&#127912; However, I believe that technology is not any more important than the need to bridge technology and user experience. I aspire to be a technologist who is always on the forefront of technological advances and is able to apply them to real world problems.</p>
                    <p>&#127938;&#127836; When I am not working, you will likely find me at the gym or in the comforts of my own home - building something cool or cooking up the latest meals.</p>
                </div>
            </div>

            <div className="home-content-divider"></div>

            <div className="home-about__introduction-content">
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
                <ul className="home-about__introduction scrollTrigger-fadeUp" id="home-about__introduction">
                    <div className="home-about__introduction__title t--bold">Recent Highlights</div>

                    <br/>

                    <div>Awards and Achievements:</div>
                    <br/>
                    <li>1st Place in <Leenk href="https://www.facebook.com/BizTechUBC/posts/-we-are-excited-to-announce-the-winning-teams-for-deloitte-thinktech-2020-congra/3797002770330706/">Deloitte ThinkTECH (2020)</Leenk></li>
                    <li>1st Place in <Leenk href="https://devpost.com/software/university-path-explorer">OakHacks (2020)</Leenk></li>
                    <li>1st Place in Biztech Innovation Night (2020)</li>
                    <li>Wolfram Award Winner in <Leenk href="https://devpost.com/software/nudge-txm34z">nwHacks (2020)</Leenk></li>

                    <br/>

                    <div>Volunteer-Based Activities:</div>
                    <br/>
                    <li>Mentor for Hack the North (2021)</li>
                    <li>Lead Developer at VIBEVENT (2020)</li>
                    <li>Software Developer at UBC Biztech (2020)</li>
                    <li>Mobile Developer at Code the Change Foundation (2020)</li>
                    <li>Unity Developer at Emerging Media Lab (2019)</li>
                    <li>VP Marketing at Unlimited Dance Club (2019)</li>

                    <br/><br/>

                    <Leenk to="/about">&gt; See a full list of my recent activity &lt;</Leenk>
                    {/* <Accordion
                        entries={[
                            {
                                title: "IDN -> CAN",
                                content: <>&#127470;&#127465;&#127464;&#127462; Born and raised in Indonesia, I came to Canada to pursue a higher education and explore a side of the world I had not seen before.</>
                            },
                            {
                                title: "CODING",
                                content: <>&#128187;&#128736; I fell in love with code in my second year of university, when I built my first program to help me manage my financial expenses. Ever since, I&apos;ve developed a love for developing applications and turning them into useful products.</>
                            },
                            {
                                title: "TECHNOLOGY & PRODUCT",
                                content: <>&#128104;&#8205;&#128187;&#127912; However, I believe that technology is not any more important than the need to bridge technology and user experience. I aspire to be a technologist who is always on the forefront of technological advances and is able to apply them to real world problems.</>
                            },
                            {
                                title: "FUN",
                                content: <>&#127938;&#127836; When I am not working, you will likely find me at the gym or in the comforts of my own home - building something cool or cooking up the latest meals.</>
                            }]
                        }
                        selectedIndex={selectedAccordionIndex}
                        setSelectedIndex={setSelectedAccordionIndex}
                    /> */}
                </ul>
            </div>

            {/* <div className="accordion-staller" id="accordion-staller-0"></div>
            <div className="accordion-staller" id="accordion-staller-1"></div>
            <div className="accordion-staller" id="accordion-staller-2"></div>
            <div className="accordion-staller" id="accordion-staller-3"></div> */}
            <div className="humanoid-divider" id="humanoid-divider"></div>

            <div className="home-about__strengths-content" id="home-about__strengths">
                <div className="home-about__humanoid-image strengths"></div>
                <ul className="home-about__strengths" >
                    <div className="home-about__strengths__title t--bold">People Describe Me To Be</div>

                    <br/>

                    <div className="scrollTrigger-fadeRight">
                        <li id="home-about__strengths--skeleton">
                            <span className="taitul t--bold">CURIOUS.</span>&nbsp;
                        I love learning new things and gaining new perspectives. I believe that curiosity is what drives human achievement and I am always in a constant search to establish a deeper understanding of the world and how it works.
                        </li>
                    </div>

                    <br />

                    <div className="scrollTrigger-fadeRight">
                        <li id="home-about__strengths--circulatory">
                            <span className="taitul t--bold">DEDICATED.</span>&nbsp;
                        I am willing to go the extra mile to ensure that the challenges I take on are completed to satisfaction. I take pride in the work I do and strive to exceed the average.
                        </li>
                    </div>

                    <br />

                    <div className="scrollTrigger-fadeRight">
                        <li id="home-about__strengths--muscles">
                            <span className="taitul t--bold">ORGANIZED.</span>&nbsp;
                        I am exceptionally great at planning and maintaining organization. I enjoy streamlining processes to optimize efficiency.
                        </li>
                    </div>
                </ul>
            </div>
        </div>);
};

export default Info;
