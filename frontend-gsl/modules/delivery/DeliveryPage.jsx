import React from "react";
import { Container, Divider, Grid, Paper, Typography } from "@mui/material";
import LoggedLayout from "../../components/layout/LoggedLayout";
import Copyright from "../../components/layout/Copyright";
import DeliveryStatus from "../../components/delivery/DeliveryStatus";
import ClientInfo from "../../components/client/ClientInfo";
import DeliveryAddress from "../../components/delivery/DeliveryAddress";
import DeliverySteps from "../../components/delivery/DeliverySteps";
import DeliveryItems from "../../components/delivery/DeliveryItems";

const DeliveryPage = ({ delivery, client }) => (
  <LoggedLayout title="Entrega">
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{ p: 2, display: "flex", flexDirection: "column" }}
            style={{ overflow: "auto" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography as="h3" fontWeight={700}>
                Entrega {delivery.id}
              </Typography>
              <DeliveryStatus status={delivery.status} />
            </div>
            <Divider style={{ marginTop: "8px", marginBottom: "8px" }} />
            <ClientInfo client={client} />
            <Divider style={{ marginTop: "8px", marginBottom: "8px" }} />
            <DeliveryItems
              items={delivery.items}
              style={{
                paddingTop: "16px",
                paddingBottom: "16px",
                marginBottom: "16px",
              }}
            />
            <DeliveryAddress delivery={delivery} />
            <Divider style={{ marginTop: "8px", marginBottom: "8px" }} />
            <DeliverySteps steps={delivery.routeSteps} />
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  </LoggedLayout>
);

export default DeliveryPage;
