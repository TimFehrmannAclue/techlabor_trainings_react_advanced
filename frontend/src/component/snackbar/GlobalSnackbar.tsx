import * as React from 'react';
import { useEffect } from 'react';
import { Alert, Box, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { IRootState } from '../../state/store';
import { clearSnackbar } from '../../state/slice/snackbarSlice';
import { SNACKBAR_AUTO_HIDE_DURATION_IN_MS } from '../../config/config';

/**
 * Displays Snackbars using SnackbarSlice GlobalState
 * Uses NotiStack package: https://notistack.com/getting-started
 * Has been extended to allow display of multiple snackbars using Ids on Snackbars
 */
export default function GlobalSnackbar() {
  const { currentAlert } = useSelector((state: IRootState) => state.snackbar);
  const dispatch = useDispatch();

  // Auto hide
  useEffect(() => {
    if (!currentAlert) {
      return;
    }

    setTimeout(() => {
      dispatch(clearSnackbar());
    }, SNACKBAR_AUTO_HIDE_DURATION_IN_MS);
  }, [currentAlert]);

  const handleClose = () => {
    dispatch(clearSnackbar());
  };

  return (
    <Snackbar
      open
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{ marginTop: 6 }}
    >
      <Box flexDirection="column" gap={1} display="flex">
        {
                    currentAlert ? (
                      <Alert
                        key={currentAlert.text}
                        onClose={handleClose}
                        severity={currentAlert.severity}
                      >
                        {currentAlert.text}
                      </Alert>
                    ) : null
                }
      </Box>
    </Snackbar>
  );
}
