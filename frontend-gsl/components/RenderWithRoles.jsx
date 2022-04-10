import React, { useEffect, useState } from "react";

const RenderWithRoles = ({ children, roles }) => {
  const [shouldRenderContent, setShouldRenderContent] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    let userContainSomeRole = false;

    for (let i = 0; i < user.roles.length; i++) {
      const currentRole = user.roles[i];
      if (roles.find((item) => item === currentRole)) {
        userContainSomeRole = true;
      }
    }

    setShouldRenderContent(userContainSomeRole);
  }, [roles]);

  return shouldRenderContent ? <>{children}</> : null;
};

export default RenderWithRoles;
