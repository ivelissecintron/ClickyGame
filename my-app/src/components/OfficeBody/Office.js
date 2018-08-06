import React from "react";
import "./Office.css";

const Officecard = props => (
    <button onClick={() => props.handleOnchange(props.id, props.phrase)}>
        <div className="cards">
            <div className="img-container">
                <img id={props.id} alt={props.name} src={props.image} />
            </div>
        </div>
    </button>
);

export default Officecard;