/* eslint-disable react/prop-types */
import { Divider, ListItemButton, ListItemIcon } from '@mui/material';
import { ActionIconContainerDesktop, ActionIconContainerMobile, MyList } from '../../styles/appBar';
import React from 'react';
import { Favorite, Person, ShoppingCart } from '@mui/icons-material';
import { Colors } from '../../styles/theme';

const Actions = ({ Matches }) => {
  const ComponentMix = Matches ? ActionIconContainerMobile : ActionIconContainerDesktop;
  return (
    <ComponentMix>
      <MyList type="row">
        <ListItemButton sx={{ justifyContent: 'center' }}>
          <ListItemIcon
            sx={{ display: 'flex', justifyContent: 'center', color: Matches && Colors.secondary }}
          >
            <ShoppingCart />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />

        <ListItemButton sx={{ justifyContent: 'center' }}>
          <ListItemIcon
            sx={{ display: 'flex', justifyContent: 'center', color: Matches && Colors.secondary }}
          >
            <Favorite />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />

        <ListItemButton sx={{ justifyContent: 'center' }}>
          <ListItemIcon
            sx={{ display: 'flex', justifyContent: 'center', color: Matches && Colors.secondary }}
          >
            <Person />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </ComponentMix>
  );
};

export default Actions;
