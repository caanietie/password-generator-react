import React, { useState } from "react";
import copy from "../assets/copy.png";
import eyeAllowed from "../assets/eye-allowed.png";
import eyeBlocked from "../assets/eye-blocked.png";

export default function InputComponent(props) {
  const [showPassword, setShowPassword] = useState(false);
  const { generatedPassword, copyGeneratedPassword } = props;
  const [alt, src, val] = showPassword ?
    ["show password", eyeAllowed, "＊".repeat(generatedPassword.length)] :
    ["hide password", eyeBlocked, generatedPassword];
  return (
    <div className="inputComponent" data-testid="inputComponent">
      <input type="text" readOnly={true} value={val} />
      <div>
        <button onClick={() => copyGeneratedPassword()}>
          <img alt="copy" src={copy} width={25} height={25} title="Copy" />
        </button>
        <button onClick={() => setShowPassword(!showPassword)}>
          <img alt={alt} src={src} width={25} height={25} title={alt} />
        </button>
      </div>
    </div>
  )
}