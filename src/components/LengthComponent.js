import React from "react";

export default function LengthComponent(props) {
  return (
    <div className="lengthComponent" data-testid="lengthComponent">
      <div>
        <label>Password Length</label>
        <label>{props.passwordLength}</label>
      </div>
      <input type="range" value={props.passwordLength} step={1}
        // TODO: Introduce a throttle function here
        onChange={event => {
          const len = parseInt(event.target.value);
          props.setPasswordLength(len < 8 ? 8 : len);
        }}
      />
    </div>
  )
}