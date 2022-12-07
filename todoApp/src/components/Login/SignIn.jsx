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
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { signIn } from "../../helpers/login";

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
            Donadito
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn({ setToken }) {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const { email, password } = form;

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value,
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await signIn(form);
        setToken(data.token);
        if(data.token)
            navigate("/home");
    }

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Iniciar Sesión
            </Typography>
            <Box
                noValidate
                sx={{ mt: 1 }}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Correo Electrónico"
                    name="email"
                    autoComplete="email"
                    value={ email }
                    onChange={handleInputChange}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    value={ password }
                    onChange={handleInputChange}
                    autoComplete="current-password"
                />
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick =  { handleSubmit }
                >
                    Iniciar Sesión
                </Button>
                <Grid container>
                    <Grid item>
                        <Link href="/signup" variant="body2">
                        {"¿No tienes cuenta? Registrate"}
                        </Link>
                    </Grid>
                </Grid>
                <div className="strike mt-3">
                    <span>Or</span>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            setToken(credentialResponse.credential);
                            navigate("/home");
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </div>
            </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
        </ThemeProvider>
    );
}
