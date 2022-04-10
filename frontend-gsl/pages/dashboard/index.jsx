import React, { useEffect } from "react";
import DashboardPage from "../../modules/dashboard/DashboardPage";
import { fetchDashboard } from "../../modules/dashboard/dashboardService";

const index = (props) => {
  useEffect(() => {
    const authToken = localStorage.getItem("auth");

    if (!authToken) {
      window.location.href = "/entrar";
    }
  }, []);

  return <DashboardPage {...props} />;
};

export async function getServerSideProps(context) {
  try {
    const { deliveriesPerMonth, lastDeliveries, monthlyRevenue } =
      await fetchDashboard();
    return {
      props: {
        deliveriesPerMonth,
        lastDeliveries,
        monthlyRevenue,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
}

export default index;
