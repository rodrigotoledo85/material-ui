import React, { useState } from 'react';
import { Container, Typography, Box, IconButton, Card, CardContent } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styles from './Home.module.css';

const Home = () => {
  const [saldo, setSaldo] = useState(false);

  const handleToggleBalance = () => {
    setSaldo(!saldo);
  };

  return (
    <Container maxWidth={false} className={styles.container}>
      <Box className={styles.header}>
        <Typography variant="h4" color='#512DA8'>Olá Usuário</Typography>
      </Box>
      <Card className={styles.card}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Saldo</Typography>
            <IconButton onClick={handleToggleBalance}>
              {saldo ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>
          {saldo ? (
            <Typography variant="body1">R$ 1.000,00</Typography>
          ) : (
            <Typography variant="body1"></Typography>
          )}
        </CardContent>
      </Card>

      <Box className={styles.cardsContainer} display="flex" flexWrap="wrap" justifyContent="space-around" mt={4} p={2} borderRadius={8} border={1} borderColor="grey.300">
        {[...Array(6)].map((_, index) => (
          <Card key={index} className={styles.card} sx={{ width: '30%', mb: 2 }}>
            <CardContent>
              <Typography variant="h6">Card {index + 1}</Typography>
              <Typography variant="body2">Conteúdo do card {index + 1}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Home;