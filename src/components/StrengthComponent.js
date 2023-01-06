import React from "react";

export default function StrengthComponent(props) {
  return (
    <div className="strengthComponent" data-testid="strengthComponent">
      <div style={{
        width: props.strengthWidth + "%",
        border: `2px solid ${props.strengthColor}`
      }} />
    </div>
  )
}