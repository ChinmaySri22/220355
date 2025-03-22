import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Box, CssBaseline, Drawer, Toolbar, Typography, AppBar, List, ListItem, ListItemText } from '@mui/material';

// 🔥 Corrected import paths
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';

const drawerWidth = 220;

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        {/* App Bar */}
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#1976d2' }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Social Media Analytics
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Sidebar Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#f9f9f9',
              borderRight: '1px solid #e0e0e0',
            },
          }}
        >
          <Toolbar />
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/analytics">
              <ListItemText primary="Analytics" />
            </ListItem>
          </List>
        </Drawer>

        {/* Main Content */}
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: '#f0f2f5', p: 3, marginLeft: `${drawerWidth}px`, minHeight: '100vh' }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
