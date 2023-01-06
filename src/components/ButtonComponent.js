import React from "react";

export default function ButtonComponent(props) {
  return (
    <div className="buttonComponent" data-testid="buttonComponent">
      <button disabled={props.disabled}
        style={{ cursor: props.disabled ? "text" : "pointer" }}
        onClick={() => {
          props.passwordGeneratorCallback();
          props.strengthCallback();

        }}
      >
        GENERATE PASSWORD
      </button>
    </div>
  )
}