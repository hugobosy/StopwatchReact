import React from "react";

export const SwitchButton = props => {
    return (
        <button onClick={props.click}>{props.active ? "stop" : "start"}</button>
    )
}