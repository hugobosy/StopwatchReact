import React from "react";
import './SwitchButton.css';

export const SwitchButton = props => {
    return (
        <button onClick={props.click} className={props.active ? "on-timer" : "off-timer"}>{props.active ? "Stop" : "Start"}</button>
    )
}