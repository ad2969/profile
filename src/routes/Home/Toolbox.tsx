import React from "react";

import DevelopmentIcon from "../../assets/svg/toolbox/development";
import EngineeringIcon from "../../assets/svg/toolbox/engineering";
import ProductDesignIcon from "../../assets/svg/toolbox/productDesign";
import PMIcon from "../../assets/svg/toolbox/projectManagement";

import "./styles.scss";

const Toolbox: React.FunctionComponent = () => {
    return (
        <div className="home-toolbox">
            <div className="home-toolbox__icons">
                <div className="home-toolbox__icon">
                    <DevelopmentIcon/>
                    <span>Development</span>
                </div>
                <div className="home-toolbox__icon">
                    <ProductDesignIcon/>
                    <span>Product Design</span>
                </div>
                <div className="home-toolbox__icon">
                    <EngineeringIcon/>
                    <span>Engineering</span>
                </div>
                <div className="home-toolbox__icon">
                    <PMIcon/>
                    <span>Product Management</span>
                </div>
            </div>
        </div>);
};

export default Toolbox;
