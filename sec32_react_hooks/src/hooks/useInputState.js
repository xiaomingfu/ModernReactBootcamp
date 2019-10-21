import { useState } from "react";

export default initialVal => {
  const [vaule, setVaule] = useState(initialVal);
  const updateVaule = e => {
    setVaule(e.target.value);
  };
  const reset = () => {
    setVaule("");
  };
  return [vaule, updateVaule, reset];
};
