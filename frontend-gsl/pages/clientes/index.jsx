import React, { useEffect } from "react";
import ClientPage from "../../modules/client/ClientPage";
import { getClients } from "../../modules/client/clientService";

const index = (props) => {
  useEffect(() => {
    const authToken = localStorage.getItem("auth");

    if (!authToken) {
      window.location.href = "/entrar";
    }
  }, []);

  return <ClientPage {...props} />;
};

export async function getServerSideProps(context) {
  try {
    const { clients } = await getClients();
    return {
      props: {
        clients,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
}

export default index;
