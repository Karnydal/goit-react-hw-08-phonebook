import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

export default function NavigationSignup() {
  return (
    <Button
      component={RouterLink}
      to="/register"
      key="Sign up"
      sx={{
        mx: 1,
        my: 2,
        color: 'white',
        display: 'block',
        border: 1,
        borderRadius: '8px',
      }}
    >
      Sign up
    </Button>
  );
}

