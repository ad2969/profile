import React from "react";

import "./styles.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    img: string
}

const CustomImageIcon: React.FunctionComponent<Props> = ({ img }) => {
    return (
        <div className="custom-icon" >
            <img className="custom-icon__img" src={img} alt="icon" />
        </div>
    );
};

export default CustomImageIcon;
