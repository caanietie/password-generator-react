import React, { useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import HeaderComponent from "./components/HeaderComponent";
import InputComponent from "./components/InputComponent";
import LengthComponent from "./components/LengthComponent";
import SettingsComponent from "./components/SettingsComponent";
import StrengthComponent from "./components/StrengthComponent";

export default function PasswordGenerator() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [strengthWidth, setStrengthWidth] = useState(0);
  const [strengthColor, setStrengthColor] = useState("blue");
  const [passwordLength, setPasswordLength] = useState(8);
  const [lowerCase, setLowerCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [duplicate, setDuplicate] = useState(false);
  const [upperCase, setUpperCase] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [spaces, setSpaces] = useState(false);
  const copyGeneratedPassword = () => {
    navigator.clipboard.writeText(generatedPassword);
  }
  const passwordGeneratorCallback = () => {
    var condStr = "", resultStr = "", tmp = "";
    if (lowerCase) condStr += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) condStr += "0123456789";
    if (upperCase) condStr += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (symbols) condStr += "~!@#$%^&_-+=\\|;:/.>,<";
    if (spaces) condStr += " ";
    while (resultStr.length < passwordLength) {
      tmp = condStr[parseInt(Math.random() * condStr.length)];
      if (duplicate && resultStr.indexOf(tmp) >= 0) continue;
      resultStr += tmp;
    }
    setGeneratedPassword(resultStr);
  }
  const strengthCallback = () => {
    // TODO: Develop a better algorithm to calculate password strength
    var strengthScore = 0;
    const color = { 50: "red", 70: "yellow", 100: "green" };
    if (lowerCase && /[a-z]/.test(generatedPassword)) strengthScore += 15;
    if (numbers && /[0-9]/.test(generatedPassword)) strengthScore += 15;
    if (upperCase && /[A-Z]/.test(generatedPassword)) strengthScore += 15;
    if (symbols && /[~!@#$%^&_\-+=\\|;:/.>,<]/.test(generatedPassword))
      strengthScore += 15;
    if (spaces && generatedPassword.indexOf(" ") >= 0) strengthScore += 15;
    if (duplicate && new Set(generatedPassword).size === generatedPassword.length)
      strengthScore += 15;
    setStrengthWidth(strengthScore <= 50 ? 50 : strengthScore <= 70 ? 70 : 100);
    setStrengthColor(color[strengthWidth]);
  }
  return (
    <div className="passwordGenerator" data-testid="passwordGenerator">
      <HeaderComponent />
      <InputComponent generatedPassword={generatedPassword}
        copyGeneratedPassword={() => copyGeneratedPassword()}
      />
      <StrengthComponent strengthWidth={strengthWidth}
        strengthColor={strengthColor}
      />
      <LengthComponent passwordLength={passwordLength}
        setPasswordLength={len => setPasswordLength(len)}
      />
      <SettingsComponent
        settingsState={{
          lowerCase, numbers, duplicate,
          upperCase, symbols, spaces
        }}
        settingsCallback={{
          setLowerCase, setNumbers, setDuplicate,
          setUpperCase, setSymbols, setSpaces
        }}
      />
      <ButtonComponent
        disabled={[lowerCase, numbers, upperCase, symbols].every(e => !e)}
        passwordGeneratorCallback={() => passwordGeneratorCallback()}
        strengthCallback={() => strengthCallback()}
      />
    </div>
  )
}