import React from "react";
import { Grid, Typography } from "@mui/material";

const ClientInfo = ({ client }) => (
  <Grid container>
    <Grid item xs={12}>
      <Typography>
        <b>Nome:</b> {client.name}
      </Typography>
    </Grid>
    <Grid item xs={12} md={6}>
      <Typography>
        <b>Email:</b> {client.email}
      </Typography>
    </Grid>
    <Grid item xs={12} md={6}>
      <Typography>
        <b>Telefone:</b> {client.phone}
      </Typography>
    </Grid>
  </Grid>
);

export default ClientInfo;
