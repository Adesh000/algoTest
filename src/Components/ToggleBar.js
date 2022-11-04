import React from "react";
import '../Styles/ToggleBar.css';

const ToggleBar = () => {
    return (
        <div className="main-container">
            <label className="toggler_label">Select Segments</label>
            <div className="toggle-container">
                <input className="radio_input" type="radio" name="toggle_option" id="toggle-option-one" />
                <label className="radio_label" htmlFor="toggle-option-one">Features</label>
                <input className="radio_input" type="radio" name="toggle_option" id="toggle-option-two" checked/>
                <label className="radio_label" htmlFor="toggle-option-two">Options</label>
            </div>
        </div>
    )
}


export default ToggleBar;