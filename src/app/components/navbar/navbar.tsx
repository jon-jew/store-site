"use client"

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import './navbar.scss';

function ResponsiveAppBar() {
  const pages = [
    { name: 'Services', link: '/services' },
    { name: 'Appointments', link: '/appointment' },
    { name: 'Policies', link: '/policies' },
    { name: 'Contact Us', link: '/#contactUs' }
  ];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ backgroundColor: '#000' }} position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <Link key={page.name} href={page.link}>
                  <MenuItem
                    key={page.name}
                    onClick={() => {
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography sx={{ textAlign: 'center', fontFamily: 'var(--font-oswald)', textTransform: 'uppercase' }}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
            <div className="logo-container small">
              <Image src="/largeLogo.png" width={130} height={20} alt="navbar logo" />
            </div>

          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <div className="logo-container">
              <Image src="/largeLogo.png" width={170} height={20} alt="navbar logo" />
            </div>

            {pages.map((page) => (
              <Link key={page.name} href={page.link}>
                <Button
                  onClick={() => {
                    handleCloseNavMenu();
                  }}
                  sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'var(--font-oswald)' }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
