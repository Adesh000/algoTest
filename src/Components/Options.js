import React from "react";
import '../Styles/Options.css';

const Options = () => {
    return (
        <div className="legbuilder_form">
            <div className="number_container leg_div">
                <label htmlFor="lot-number" className="number_label">Total lot</label>
                <input type="number" name="" id="lot-number" className="number_input"/>
            </div>
            <div className="position_container leg_div">
                <label htmlFor="position" className="select_label">Position</label>
                <select className="select_position">
                    <option>Buy</option>
                    <option>Sell</option>
                </select>
            </div>
            <div className="option_container leg_div">
                <label className="option_label">Option Type</label>
                <select className="option_select">
                    <option>Call</option>
                    <option>Put</option>
                </select>
            </div>
            <div className="expiry_container leg_div">
                <label htmlFor="expiry" className="expiry_label">Expiry</label>
                <select name="" id="expiry" className="expiry_select">
                    <option>Weekly</option>
                    <option>Monthly</option>
                </select>
            </div>
            <div className="strike_criteria_container leg_div">
                <label htmlFor="strike-criteria" className="number_label">Select Strike Criteria</label>
                <select name="" id="strike-criteria">
                    <option>Strike Type</option>
                    <option>Premiunm Range</option>
                    <option>Closest Premium</option>
                    <option>Straddle Width</option>
                </select>
            </div>
            <div className="strike_type_container leg_div">
                <label htmlFor="strike-type" className="number_label">Strike Type</label>
                <select name="" id="strike-type">
                    <option>ATM</option>
                    <option>OTM</option>
                    <option>ITM</option>
                </select>
            </div>
        </div>
    )
}

export default Options;