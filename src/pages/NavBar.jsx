import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LogoImage from "../assets/wallet.png";
import NavMenu from './NavMenu';
import UserMenu from './UserMenu';

const pages = ['Depositar', 'Transferências', 'Extrato'];
const settings = ['Conta', 'Dashboard', 'Sair'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#512DA8' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="/home">
            <Box
              component="img"
              sx={{
                height: 64,
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
              alt="Logo"
              src={LogoImage}
            />
          </a>

          <NavMenu
            anchorElNav={anchorElNav}
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
          />

          <a href="/home">
            <Box
              component="img"
              sx={{
                height: 64,
                display: { xs: "flex", md: "none" },
                mr: 1,
              }}
              alt="Logo"
              src={LogoImage}
            />
          </a>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={`/${page.toLowerCase()}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <UserMenu
            anchorElUser={anchorElUser}
            handleOpenUserMenu={handleOpenUserMenu}
            handleCloseUserMenu={handleCloseUserMenu}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;