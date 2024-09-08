import { Button } from '@mui/material';

import { useThemeContext } from '../providers/ThemeContextProvider';
import TodoList from './TodoList';
import Container from './container/Container';

export default function App() {
  const { toggleTheme, currentTheme } = useThemeContext();

  return (
    <Container>
      <h1>{currentTheme === 'light' ? 'Светлая тема' : 'Тёмная тема'}</h1>
      <Button onClick={toggleTheme} variant="contained">
        Переключить тему
      </Button>

      <TodoList />
    </Container>
  );
}
