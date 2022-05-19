import React from "react";
import './ResetButton.css';

export const ResetButton = (props) => (
    <button onClick={props.click} disabled={!props.active} className={props.active ? "reset-btn" : null}>Reset</button>
)
