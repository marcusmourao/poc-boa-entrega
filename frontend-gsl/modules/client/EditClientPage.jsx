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
import { editClientById } from "./clientService";

const onSubmit = ({ id, name, phone, email }) => {
  editClientById({ id, name, phone, email }).then(() => {
    window.location.href = "/clientes";
  });
};

const EditClientPage = ({ client }) => (
  <LoggedLayout title="Editar Cliente">
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
            <ClientForm
              onSubmit={(formData) =>
                onSubmit({
                  ...formData,
                  id: client.id,
                })
              }
              name={client.name}
              phone={client.phone}
              email={client.email}
            />
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  </LoggedLayout>
);

export default EditClientPage;
