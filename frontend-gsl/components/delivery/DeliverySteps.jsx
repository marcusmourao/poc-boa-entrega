import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import DeliveryAddress from "./DeliveryAddress";

const DeliverySteps = ({ steps }) => {
  const a = {};
  return (
    <Grid container>
      <Grid item>
        <Typography>
          <b>Rota de entrega</b>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {steps.map((step, index) => (
          <div>
            <span style={{ color: "grey" }}>Etapa {index + 1}</span>
            <br />
            <DeliveryAddress delivery={step} hideMapsButton />
            <Divider style={{ marginTop: "8px", marginBottom: "8px" }} />
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

export default DeliverySteps;
