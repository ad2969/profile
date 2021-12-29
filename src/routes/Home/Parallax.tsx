import React, { useRef, useEffect } from "react";
import Parallax from "parallax-js";

import HeroContent from "./Hero";
import SunImage from "../../assets/images/cover/sun-silhouette.png";
import BirdsImage from "../../assets/images/cover/birds-silhouette.png";

import "./parallax.scss";

interface LayerProps {
    depth: Number;
    children?: React.ReactNode;
}

const ParallaxLayer: React.FunctionComponent<LayerProps> = ({ depth, children }) => {
    return (
        <div data-depth={depth} className="layer">
            {children}
        </div>
    );
};

const ParallaxScene: React.FunctionComponent = () => {
    const sceneRef = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneRef.current, {
            relativeInput: true,
            hoverOnly: false,
            limitY: 20,
            selector: ".layer"
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);

    return (
        <div ref={sceneRef} className="parallax" id="parallax-wrapper">
            <ParallaxLayer depth={0.1}><img className="sun" src={SunImage} alt="sun"/></ParallaxLayer>
            <ParallaxLayer depth={0.5}><img className="birds" src={BirdsImage} alt="sun"/></ParallaxLayer>
            <ParallaxLayer depth={0.2}><div className="layer-wide mountain1" /></ParallaxLayer>
            <ParallaxLayer depth={0.3}><div className="layer-wide mountain2" /></ParallaxLayer>
            <ParallaxLayer depth={0.3}><div className="layer-wide mountain3" /></ParallaxLayer>
            <ParallaxLayer depth={0.5}><div className="layer-wide forest" /></ParallaxLayer>
            <ParallaxLayer depth={1}><div className="layer-wide city" /></ParallaxLayer>
            <HeroContent />
        </div>
    );
};

export default ParallaxScene;
