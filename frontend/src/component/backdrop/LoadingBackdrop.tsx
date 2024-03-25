import { Backdrop, CircularProgress, styled } from '@mui/material';

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  position: 'relative',
  height: 'inherit',
  backgroundColor: theme.palette.overlay.main,
}));

export default function LoadingBackdrop() {
  return (
    <StyledBackdrop id="LoadingBackdrop" open>
      <CircularProgress id="CircularProgress" size={50} color="primary" />
    </StyledBackdrop>
  );
}
