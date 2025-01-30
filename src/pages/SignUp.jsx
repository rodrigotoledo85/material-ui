import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para lidar com o cadastro do usuário
    console.log('Email:', email);
    console.log('Password:', password);
    setSuccess(true);
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <Container maxWidth={false} className={styles.container} sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ width: { xs: '100%', md: '50%' }, mx: { xs: 0, md: 'auto' } }}>
          <Typography variant="h4" component="h1" gutterBottom className={styles.h1}>
            Cadastro de Usuário
          </Typography>

          <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                label="Senha"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Cadastrar
            </Button>
          </form>
          {success && <Alert variant="filled" severity="success" sx={{ mt: 2 }}>Cadastro realizado com sucesso!</Alert>}
        </Box>
    </Container>
  );
}

export default SignUp;