import React, { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "white",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "32px",
  p: 4,
};

const DeliveryGeoLocation = ({ lat, lng, id }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const handleOpen = () => {
    setIsModalOpened(true);
  };

  return (
    <>
      <Button onClick={handleOpen}>Ver no mapa</Button>
      <Modal
        open={isModalOpened}
        onClose={() => setIsModalOpened(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={style}>
          Mostrar local no mapa
          <br />
          Latitude: {lat}
          <br />
          Longitude: {lng}
          <br />
        </Box>
      </Modal>
    </>
  );
};

export default DeliveryGeoLocation;
