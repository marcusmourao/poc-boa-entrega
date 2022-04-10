import React, { useEffect } from "react";
import LoginPage from "../../modules/auth/login/LoginPage";

function login() {
  useEffect(() => {
    const authToken = localStorage.getItem("auth");
    if (authToken) {
      window.location.href = "/dashboard";
    }
  }, []);

  return <LoginPage />;
}

export default login;
