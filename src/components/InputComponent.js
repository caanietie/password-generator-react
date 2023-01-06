import React from "react";
import copy from "../assets/copy.png";

export default function InputComponent(props) {
  return (
    <div className="inputComponent" data-testid="inputComponent">
      <input type="text" readOnly={true} value={props.generatedPassword} />
      <button onClick={() => props.copyGeneratedPassword()}>
        <img alt="copy" src={copy} width={25} height={25} />
      </button>
    </div>
  )
}