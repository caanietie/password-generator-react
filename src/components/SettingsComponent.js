import React from "react";

export default function SettingsComponent(props) {
  const { lowerCase, numbers,
    duplicate, upperCase, symbols, spaces } = props.settingsState
  const { setLowerCase, setNumbers, setDuplicate,
    setUpperCase, setSymbols, setSpaces } = props.settingsCallback
  return (
    <div className="settingsComponent" data-testid="settingsComponent">
      <label>Password Settings</label>
      <div>
        <div>
          <div>
            <input type="checkbox" checked={lowerCase}
              onChange={() => setLowerCase(!lowerCase)}
            />
            <label>LowerCase(a-z)</label>
          </div>
          <div>
            <input type="checkbox" checked={numbers}
              onChange={() => setNumbers(!numbers)}
            />
            <label>Numbers(0-9)</label>
          </div>
          <div>
            <input type="checkbox" checked={duplicate}
              onChange={() => setDuplicate(!duplicate)}
            />
            <label>Exclude Duplicate</label>
          </div>
        </div>
        <div>
          <div>
            <input type="checkbox" checked={upperCase}
              onChange={() => setUpperCase(!upperCase)}
            />
            <label>UpperCase(A-Z)</label>
          </div>
          <div>
            <input type="checkbox" checked={symbols}
              onChange={() => setSymbols(!symbols)}
            />
            <label>Symbols(!-_$^+*#)</label>
          </div>
          <div>
            <input type="checkbox" checked={spaces}
              onChange={() => setSpaces(!spaces)}
            />
            <label>Include Spaces</label>
          </div>
        </div>
      </div>
    </div>
  )
}