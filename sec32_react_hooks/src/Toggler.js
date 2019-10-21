import React from "react";
import useToggle from "./hooks/useToggle";
function Toggler() {
  const [happy, toggleIsHappy] = useToggle(true);
  const [heartbroken, toggleIsHeartBroken] = useToggle(false);
  const [isBanana, toggleIsBanana] = useToggle(false);

  return (
    <div>
      <h1 onClick={toggleIsHappy}>{happy ? "😀" : "😂"}</h1>
      <h1 onClick={toggleIsHeartBroken}>{heartbroken ? "💔" : "💘"}</h1>
      <h1 onClick={toggleIsBanana}>{isBanana ? "🍌" : "🍎"}</h1>
    </div>
  );
}
export default Toggler;
