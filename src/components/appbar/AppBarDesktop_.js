/* eslint-disable react/prop-types */
import React from 'react';
import { AppBarContainer, AppBarHeader, MyList } from '../../styles/appBar';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Search } from '@mui/icons-material';
import Actions from './Actions';

// eslint-disable-next-line no-unused-vars
const AppBarDesktop_ = ({ Matches }) => {
  const { setShowSearchBox } = useUIContext();

  return (
    // <componentMix>
    <AppBarContainer>
      <AppBarHeader variant="h4">My Shop</AppBarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
        <ListItemButton onClick={() => setShowSearchBox(true)}></ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Search />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions Matches={Matches} />
    </AppBarContainer>
    // </componentMix>
  );
};

export default AppBarDesktop_;
