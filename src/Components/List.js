import React from "react";
import '../Styles/List.css';

const List = () => {
    return (
        <div className="container">
            <label htmlFor="lots">Lots:</label>
            <input type="number" name="" id="lots" />
            <select>
                <option value="">Sell</option>
                <option value="">Buy</option>
            </select>
            <select>
                <option value="">Call</option>
                <option value="">Put</option>
            </select>
            <select>
                <option value="">Weekly</option>
                <option value="">Monthly</option>
            </select>
            <label htmlFor="strike">Select Strike</label>
            <select>
                <option value="">Strike Type</option>
                <option value="">Premium Range</option>
                <option value="">Closest Premium</option>
                <option value="">Straddle Width</option>
            </select>
            <select name="" id="">
                <option value="">ATM</option>
                <option value="">ITM</option>
                <option value="">OTM</option>
            </select>

            <div className="feature-container">
                <div className="momentum-container">
                    <input type="checkbox" id="momentum" />
                    <label htmlFor="momentum">Simple Momentum</label>
                    <div className="inputs">
                        <select name="" id="">
                            <option>Points</option>
                            <option>Points</option>
                            <option>Percentage</option>
                            <option>Percentage</option>
                            <option>Underlying Points</option>
                            <option>Underlying Points</option>
                            <option>Underlying Percentage</option>
                            <option>Underlying Percentage</option>
                        </select>
                        <input type="number" name="" id="" />
                    </div>
                </div>

                <div className="sl-container">
                    <input type="checkbox" id="sl" />
                    <label htmlFor="sl">Trial SL</label>
                    <div className="inputs">
                        <select name="" id="">
                            <option>Points</option>
                            <option>Percentage</option>
                        </select>
                        <input type="number" name="" id="" />
                    </div>
                </div>
            </div>
            <img src="../Images/delete.svg" />
            <img src="../Images/copy.svg" />
        </div>
    );
};

export default List;
