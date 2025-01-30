import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import LogoImage from "../assets/wallet.png";
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Container maxWidth={false} className="login-container">
            <Box className="login-box">
                <Box
                    component="img"
                    className="login-logo"
                    alt="Logo"
                    src={LogoImage}
                />
                <Typography variant="h4" component="h1" gutterBottom className="login-title">
                    Wallet Digital Login
                </Typography>
                <TextField
                    label="Email:"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="login-input"
                    InputLabelProps={{ className: 'login-input-label' }}
                    InputProps={{ className: 'login-input-field' }}
                />
                <TextField
                    label="Senha:"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                    InputLabelProps={{ className: 'login-input-label' }}
                    InputProps={{ className: 'login-input-field' }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        href="/home"
                        sx={{ mr: 2 }}
                    >
                        Entrar
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        href="/signup"
                    >
                        Cadastrar
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;