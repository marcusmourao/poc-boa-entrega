import React from "react";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import LoggedLayout from "../../components/layout/LoggedLayout";
import Copyright from "../../components/layout/Copyright";
import ClientsTable from "./ClientsTable";

const ClientPage = ({ clients }) => (
  <LoggedLayout title="Clientes">
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{ p: 2, display: "flex", flexDirection: "column" }}
            style={{ overflow: "auto" }}
          >
            <Typography as="h3" fontWeight={700}>
              Clientes
              <Button href="/clientes/novo" component="a">
                Novo
              </Button>
            </Typography>
            <ClientsTable clients={clients} />
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  </LoggedLayout>
);

export default ClientPage;
