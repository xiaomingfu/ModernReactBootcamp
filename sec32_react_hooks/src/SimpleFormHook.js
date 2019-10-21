import React from "react";
import useInputState from "./hooks/useInputState";
export default function SimpleFormHook() {
  const [email, updateEmail, resetEmail] = useInputState("");
  const [password, updatePassword, resetPassword] = useInputState("");

  return (
    <div>
      <h1>
        Email is...{email} and Password is...{password}
      </h1>
      <input type="text" value={email} onChange={updateEmail} />
      <button onClick={resetEmail}>Reset email</button>
      <input type="text" value={password} onChange={updatePassword} />
      <button onClick={resetPassword}>Reset password</button>
    </div>
  );
}
