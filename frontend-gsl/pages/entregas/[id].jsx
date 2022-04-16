import React, { useEffect } from "react";
import { getClientById } from "../../modules/client/clientService";

import DeliveryPage from "../../modules/delivery/DeliveryPage";
import { getDeliveryById } from "../../modules/delivery/deliveryService";

const index = (props) => {
  useEffect(() => {
    const authToken = localStorage.getItem("auth");

    if (!authToken) {
      window.location.href = "/entrar";
    }
  }, []);

  return <DeliveryPage {...props} />;
};

export async function getServerSideProps(context) {
  try {
    const clientId = context.query.id;
    const delivery = await getDeliveryById(clientId);
    const client = await getClientById(delivery.clientId);
    return {
      props: {
        delivery,
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
