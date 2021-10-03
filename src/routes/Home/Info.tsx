import React from "react";

import MusclesImage from "../../assets/images/humanoid/muscles.png";
import CirculatoryImage from "../../assets/images/humanoid/circulatory.png";
import SkeletonImage from "../../assets/images/humanoid/skeleton.png";

const Info: React.FunctionComponent = () => {
    const imageLayerHover = (variant) => {
        document.getElementById(`home-about__strengths--${variant}`)?.classList.toggle("active");
    };

    return (
        <div className="home-about">
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
                <div className="home-about__introduction">
                    <div className="home-about__introduction__tagline">
                        I’m an engineering student interested in utilizing innovative technology to improve the quality of human life. Simply put, <span className="t--c3 t--bold">I like to build things.</span>
                    </div>
                    <div className="home-about__introduction__text">
                        <p>&#127470;&#127465;&#127464;&#127462; Born and raised in Indonesia, I came to Canada to pursue a higher education and explore a side of the world I had not seen before.</p>
                        <p>&#128187;&#128736; I fell in love with code in my second year of university, when I built my first program to help me manage my financial expenses. Ever since, I&apos;ve developed a love for developing applications and turning them into useful products.</p>
                        <p>&#128104;&#8205;&#128187;&#127912; However, I believe that technology is not any more important than the need to bridge technology and the user experience. I aspire to be a technologist who is always on the forefront of technological advances and their applications to our daily lives.</p>
                        <p>&#127938;&#127836; When I am not working, you will likely find me at the gym or in the comforts of my own home - building something cool or cooking up the latest meals.</p>
                    </div>
                </div>
            </div>

            <div className="humanoid-divider" id="humanoid-divider"></div>

            <div className="home-about__strengths-content" id="home-about__strengths">
                <div className="home-about__humanoid-image strengths"></div>
                <ul className="home-about__strengths">
                    <div className="home-about__strengths__title">People have described me as:</div>

                    <br/>

                    <li id="home-about__strengths--skeleton">
                        <span className="taitul t--bold">CURIOUS.</span>&nbsp;
                        I love learning new things and gaining new perspectives. I believe that curiosity is what drives human achievement and I am always in a constant search to establish a deeper understanding of the world and how it works.
                    </li>

                    <br />

                    <li id="home-about__strengths--circulatory">
                        <span className="taitul t--bold">DEDICATED.</span>&nbsp;
                        I am willing to go the extra mile to ensure that the challenges I take on are completed to satisfaction. I take pride in the work I do and strive to exceed the average.
                    </li>

                    <br />

                    <li id="home-about__strengths--muscles">
                        <span className="taitul t--bold">ORGANIZED.</span>&nbsp;
                        I am exceptionally great at planning and maintaining organization. I enjoy streamlining processes to optimize efficiency.
                    </li>
                </ul>
            </div>
        </div>);
};

export default Info;
