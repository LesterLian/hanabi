import React, { useRef } from "react";
import ReactCodeInput from "react-verification-code-input";

export default function Login({ login, className }: { login: (string) => boolean; className?: string }) {
  const inputEl = useRef(null);

  const onVerificationEntered = (code: string) => {
    login(code);
    inputEl.current.__clearvalues__();
  };

  return (
    <ReactCodeInput ref={inputEl} className={"verification-input " + className} onComplete={onVerificationEntered} />
  );
}
