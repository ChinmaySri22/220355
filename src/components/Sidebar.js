import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <Drawer variant="permanent" anchor="left">
    <List>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/analytics">
        <ListItemText primary="Analytics" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
