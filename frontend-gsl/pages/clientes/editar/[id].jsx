import React, { useEffect } from "react";

import EditClientPage from "../../../modules/client/EditClientPage";
import { getClientById } from "../../../modules/client/clientService";

const index = (props) => {
  useEffect(() => {
    const authToken = localStorage.getItem("auth");

    if (!authToken) {
      window.location.href = "/entrar";
    }
  }, []);

  return <EditClientPage {...props} />;
};

export async function getServerSideProps(context) {
  try {
    const clientId = context.query.id;
    const client = await getClientById(clientId);
    return {
      props: {
        client,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
}

export default index;
