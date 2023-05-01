import { ListItemButton, ListItemIcon } from '@mui/material';
import { MyList } from '../../styles/appBar';
import React from 'react';
import { Favorite, Person, ShoppingCart } from '@mui/icons-material';

const actions = () => {
  return (
    <MyList>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCart />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Favorite />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Person />
        </ListItemIcon>
      </ListItemButton>
    </MyList>
  );
};

export default actions;
