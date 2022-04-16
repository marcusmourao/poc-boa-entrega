import React from "react";
import { Grid, Typography } from "@mui/material";
import DeliveryGeoLocation from "./DeliveryGeoLocation";

const buildFullAddress = (address) =>
  `${address.street}, ${address.number}, ${address.neighborhood}, ${address.city} - ${address.state}`;

const DeliveryAddress = ({ delivery, hideMapsButton }) => (
  <Grid container>
    <Grid item xs={12} md={6}>
      <Typography>
        <b>Endereço de origem</b>
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <Typography>{buildFullAddress(delivery.originAddress)}</Typography>
        </Grid>
        {!hideMapsButton && (
          <Grid item xs={12}>
            <DeliveryGeoLocation
              id="origin"
              lat={delivery.originAddress.geoLocation.lat}
              lng={delivery.originAddress.geoLocation.long}
            />
          </Grid>
        )}
      </Grid>
    </Grid>
    <Grid item xs={12} md={6}>
      <Typography>
        <b>Endereço de entrega</b>
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <Typography>
            {buildFullAddress(delivery.destinationAddress)}{" "}
          </Typography>
        </Grid>
        {!hideMapsButton && (
          <Grid item xs={12}>
            <DeliveryGeoLocation
              id="destination"
              lat={delivery.destinationAddress.geoLocation.lat}
              lng={delivery.destinationAddress.geoLocation.long}
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  </Grid>
);

export default DeliveryAddress;
