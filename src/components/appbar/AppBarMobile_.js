/* eslint-disable react/prop-types */
import React from 'react';
import { AppBarContainer, AppBarHeader } from '../../styles/appBar';
import { IconButton, MenuItem } from '@mui/material';
import { Search } from '@mui/icons-material';
import Actions from './Actions';
import { useUIContext } from '../../context/ui';

// eslint-disable-next-line no-unused-vars
const AppBarMobile_ = ({ Matches }) => {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();
  return (
    <AppBarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuItem />
      </IconButton>
      <AppBarHeader textAlign="center" variant="h4">
        My Shop
      </AppBarHeader>
      <IconButton onClick={() => setShowSearchBox(true)}>
        <Search />
      </IconButton>
      <Actions Matches={Matches} />
    </AppBarContainer>
  );
};

export default AppBarMobile_;
