import React from 'react';
import { AppBarContainer, AppBarHeader, MyList } from '../../styles/appBar';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Search } from '@mui/icons-material';

const AppBarDesktop_ = ({ matches }) => {
  return (
    <AppBarContainer>
      <AppBarHeader>My Shop</AppBarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
        <ListItemButton>
          <ListItemIcon>
            <Search />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
    </AppBarContainer>
  );
};

export default AppBarDesktop_;

// -02 : 47 : 53
