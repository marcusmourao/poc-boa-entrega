import React from "react";
import Chip from "@mui/material/Chip";

const getLabelByStatus = (status) =>
  ({
    finished: "Finalizado",
    pending: "Pendente",
    "out-of-date": "Atrasado",
  }[status]);

const getColorByStatus = (status) =>
  ({
    finished: "success",
    pending: "warning",
    "out-of-date": "error",
  }[status]);

const DeliveryStatus = ({ status }) => (
  <Chip label={getLabelByStatus(status)} color={getColorByStatus(status)} />
);

export default DeliveryStatus;
