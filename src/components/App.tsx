import { Button, Slider } from '@mui/material';
import { styled } from '@mui/material/styles';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import { useThemeContext } from '../providers/ThemeContextProvider';

const ThemedButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.status.danger,
  color: 'white',
}));

// Используйте styled-components для простых стилей
const StyledButton = styled(Button)`
  color: white;
  background-color: blue;
  // Other style properties...
`;

export default function App() {
  const { toggleTheme, currentTheme } = useThemeContext();

  return (
    <>
      <div>
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
