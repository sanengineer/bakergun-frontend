import React, { useState } from "react";
import { AuthContext } from "../../context/auth";

function PrivateAnchor() {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("token", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }} />
  );
}

export default PrivateAnchor;
