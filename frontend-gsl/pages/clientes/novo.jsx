import React, { useEffect } from "react";
import NewClientPage from "../../modules/client/NewClientPage";

const index = (props) => {
  useEffect(() => {
    const authToken = localStorage.getItem("auth");

    if (!authToken) {
      window.location.href = "/entrar";
    }
  }, []);

  return <NewClientPage {...props} />;
};

export default index;
