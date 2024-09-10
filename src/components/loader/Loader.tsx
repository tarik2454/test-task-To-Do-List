import { Box } from '@mui/material';
import { RotatingLines } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '55vh',
      }}
    >
      <RotatingLines
        visible={true}
        strokeColor="rgba(25, 118, 210, 0.5)"
        strokeWidth="4"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </Box>
  );
}
