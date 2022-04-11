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
import ClientForm from "./ClientForm";
import { createClient } from "./clientService";

const onSubmit = ({ name, phone, email }) => {
  createClient({ name, phone, email }).then(() => {
    window.location.href = "/clientes";
  });
};

const NewClientPage = ({}) => (
  <LoggedLayout title="Novo Cliente">
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{ p: 2, display: "flex", flexDirection: "column" }}
            style={{ overflow: "auto" }}
          >
            <Typography as="h3" fontWeight={700}>
              Clientes
            </Typography>
            <ClientForm onSubmit={onSubmit} />
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  </LoggedLayout>
);

export default NewClientPage;
