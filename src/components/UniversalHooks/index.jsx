import React from "react";
import { useCheckSession } from "../../hooks/useCheckSession";

const UniversalHooks = ({ children }) => {
  useCheckSession();
  return <>{children}</>;
};

export default UniversalHooks;
