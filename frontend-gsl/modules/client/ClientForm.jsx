import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const ClientForm = ({ onSubmit, name, email, phone }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name,
      email,
      phone,
    },
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Nome"
        name="name"
        autoFocus
        {...register("name", { required: true })}
        error={!!errors.name}
        helperText={errors.name && "Campo obrigatório"}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="phone"
        label="Telefone"
        name="phone"
        {...register("phone", { required: true })}
        error={!!errors.phone}
        helperText={errors.phone && "Campo obrigatório"}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="E-mail"
        name="email"
        {...register("email", { required: true })}
        error={!!errors.email}
        helperText={errors.email && "Campo obrigatório"}
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Salvar
      </Button>
    </Box>
  );
};

export default ClientForm;
