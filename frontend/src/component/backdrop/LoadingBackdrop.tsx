import {
  Backdrop, CircularProgress, styled, Typography,
} from '@mui/material';

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  position: 'relative',
  height: 'inherit',
  backgroundColor: theme.palette.overlay.main,
  borderRadius: theme.shape.borderRadius,
  flexDirection: 'column',
  gap: 16,
}));

export default function LoadingBackdrop() {
  return (
    <StyledBackdrop id="LoadingBackdrop" open>
      <CircularProgress id="CircularProgress" size={50} color="primary" />
      <Typography variant="h4" color="white">Loading</Typography>
    </StyledBackdrop>
  );
}
