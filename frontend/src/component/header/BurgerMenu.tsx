import React from 'react';
import {
  Box, IconButton, Menu, MenuItem, styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';

import { IRootState } from '../../state/store';
import { IRouteConfig } from '../../../type/route/IRouteConfig';

const Root = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {},
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

interface IProps {
    pageRouteConfigs: IRouteConfig[];
}

/**
 * AppBar Options are moved into a Dropdown Button on smaller screen widths
 */
export default function BurgerMenu({ pageRouteConfigs }: IProps) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isLoggedIn = useSelector((state: IRootState) => state.login.isLoggedIn);

  // Actions
  const handleNavigate = (route: string) => {
    handleClose();
    navigate(route);
  };

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Hide empty Menu
  const filteredPageRouteConfigs = pageRouteConfigs.filter(({ requiresAuthentication }) => !requiresAuthentication || isLoggedIn);
  if (filteredPageRouteConfigs.length === 0) {
    return null;
  }

  return (
    <Root>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleOpen}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        sx={{ mt: 4 }}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {filteredPageRouteConfigs
          .map(({ name, route }) => (
            <MenuItem
              key={name}
              onClick={() => handleNavigate(route)}
            >
              {name}
            </MenuItem>
          ))}
      </Menu>

    </Root>
  );
}
