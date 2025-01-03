import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.3)', // Optional dark overlay
      }}
    >
      <CircularProgress sx={{ color: '#790cac' }} /> {/* Updated ring color */}
    </Box>
  );
};

export default LoadingSpinner;