import { useState } from "react";

export default function useToggleState() {
  const [state, setState] = useState({ defaultVal: false });
  const toggle = () => setState(!state);
  return [state, toggle];
}
