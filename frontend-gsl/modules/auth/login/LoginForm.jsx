import React from "react";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Link,
  Checkbox,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { login } from "./authService";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ username, password }) =>
    login({ username, password })
      .then(({ token, user }) => {
        localStorage.setItem("auth", token);
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/dashboard";
      })
      .catch((e) => {
        console.log(e.message);
        alert("Usuário e/ou senha inválidos");
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
        id="username"
        label="Username"
        name="username"
        autoComplete="email"
        autoFocus
        {...register("username", { required: true })}
        error={!!errors.username}
        helperText={errors.username && "Campo obrigatório"}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Senha"
        type="password"
        id="password"
        autoComplete="current-password"
        {...register("password", { required: true })}
        error={!!errors.password}
        helperText={errors.password && "Campo obrigatório"}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Lembre-me"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Entrar
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Esqueceu a senha?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Cadastrar-se"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
