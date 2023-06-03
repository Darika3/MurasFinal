import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../../context/AuthContextProvider";
import "../Auth/Auth.css";
import Navbar from "../Navbar/Navbar";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Auth() {
  const {
    email,
    password,

    emailError,
    passwordError,
    hasAccount,

    setEmail,
    setPassword,
    setHasAccount,

    handleLogin,
    handleSignUp,
  } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
    <Navbar/>
    <div className="authBox">
      <div className="cont">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            {/* <CssBaseline /> */}
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "white",
              }}
            >
              {/* <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
            <LockOutlinedIcon />
          </Avatar> */}
              {hasAccount ? (
                <Typography
                  sx={{ fontSize: "32px" }}
                  component="h1"
                  variant="h5"
                >
                  Авторизация
                </Typography>
              ) : (
                <Typography
                  sx={{ fontSize: "32px" }}
                  component="h1"
                  variant="h5"
                >
                  Регистрация
                </Typography>
              )}

              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  helperText={emailError}
                  sx={{ color: "#fff" }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  helperText={passwordError}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                {hasAccount ? (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, color: "white" }}
                    onClick={() => handleLogin()}
                  >
                    Войти
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, color: "white" }}
                    onClick={() => handleSignUp()}
                  >
                    Зарегистрироваться
                  </Button>
                )}
                <Grid container>
                  <Grid item xs>
                    {hasAccount ? (
                      <Link
                        href="#"
                        variant="body2"
                        sx={{ color: "white" }}
                        onClick={() => setHasAccount(!hasAccount)}
                      >
                        {"Еще нет акккаунта? Зарегистрироваться"}
                      </Link>
                    ) : (
                      <Link
                        href="#"
                        variant="body2"
                        sx={{ color: "white" }}
                        onClick={() => setHasAccount(!hasAccount)}
                      >
                        {"Уже есть аккаунт? Войти"}
                      </Link>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      </div>
    </div>
    </>
  );
}
