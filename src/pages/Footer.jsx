import React from 'react';
import { Box, Container, IconButton, Typography } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import LogoImage from "../assets/wallet.png";

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#512DA8', color: 'white', py: 3 }}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    Wallet Digital
                <IconButton
                    component="a"
                    href="/"
                    sx={{ color: 'white', mr: 1 }}
                >
                    <img src={LogoImage} alt="Logo" style={{ height: 50 }} />
                </IconButton>
                </Typography>
                <Box display="flex" justifyContent="center">
                    <IconButton
                        component="a"
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'white' }}
                    >
                        <Facebook />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'white' }}
                    >
                        <Instagram />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'white' }}
                    >
                        <Twitter />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;