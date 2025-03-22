import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
        Social Media Analytics
      </Typography>
    </Toolbar>
  </AppBar>  
);

export default Navbar;
