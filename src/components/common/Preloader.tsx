import React from "react";
import loading from "../../assets/Spinner-1s-200px.svg";

export const Preloader = () => {
    return (
        <div>
            <img src={loading} alt=""/>
        </div>
    );
};
