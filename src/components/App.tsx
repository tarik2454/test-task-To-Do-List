import { Button, Slider } from '@mui/material';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';

import { useThemeContext } from '../providers/ThemeContextProvider';
import styled from 'styled-components';

const ThemedButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.status.danger,
  color: 'white',
  padding: '10px 14px',
  fontWeight: 600,
}));

const StyledButton = styled(Button)`
  color: white;
  background-color: blue;
`;

export default function App() {
  const { toggleTheme, currentTheme } = useThemeContext();

  return (
    <>
      <div>
        <h1>Привет, мир!</h1>
        <h1>{currentTheme === 'light' ? 'Светлая тема' : 'Тёмная тема'}</h1>
        <Button onClick={toggleTheme} variant="contained">
          Переключить тему
        </Button>
      </div>
      <StyledButton>My Button</StyledButton>
      <ThemedButton>Themed Button</ThemedButton>
      <Slider />
      <FaceRetouchingNaturalIcon />
    </>
  );
}
