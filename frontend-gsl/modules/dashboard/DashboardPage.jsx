import React from "react";
import {
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import LoggedLayout from "../../components/layout/LoggedLayout";
import Copyright from "../../components/layout/Copyright";
import LastDeliveriesTable from "./LastDeliveriesTable";
import MonthlyRevenue from "./MonthlyRevenue";
import DeliveriesPerMonth from "./DeliveriesPerMonth";

const DashboardPage = ({
  deliveriesPerMonth,
  monthlyRevenue,
  lastDeliveries,
}) => (
  <LoggedLayout title="Dashboard">
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <DeliveriesPerMonth deliveriesPerMonth={deliveriesPerMonth} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <MonthlyRevenue monthlyRevenue={monthlyRevenue} />
          </Paper>
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <Paper
            sx={{ p: 2, display: "flex", flexDirection: "column" }}
            style={{ overflow: "auto" }}
          >
            <Typography as="h3" fontWeight={700}>
              Últimas entregas
            </Typography>
            <LastDeliveriesTable deliveries={lastDeliveries} />
            <div style={{ paddingTop: "8px" }}>
              <Link color="primary" href="#">
                Visualizar relatório completo
              </Link>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  </LoggedLayout>
);

export default DashboardPage;
