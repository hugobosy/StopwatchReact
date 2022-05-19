import React from "react";

export const ResetButton = (props) => (
    <button onClick={props.click} className={props.active ? "active-reset" : "disable-reset"}>Reset</button>
)
