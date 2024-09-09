import { AppBar, Toolbar, Typography } from '@mui/material';
import SwitchTheme from '../SwitchTheme/SwitchTheme';
import styled from 'styled-components';
import Container from '../container/Container';
import { useThemeContext } from '../../providers/ThemeContextProvider';

const StyledAppBar = styled(AppBar)`
  background-color: #1976d2;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
`;

const StyledTypography = styled(Typography)<{ themeMode: string }>`
  margin-left: 8px;
  color: ${({ themeMode }) => (themeMode === 'dark' ? '#121212' : '#fff')};
`;

export default function Header() {
  const { currentTheme } = useThemeContext(); // Получаем текущую тему

  return (
    <StyledAppBar position="static">
      <Container>
        <StyledToolbar>
          <StyledTypography variant="h6" themeMode={currentTheme}>
            Todo List
          </StyledTypography>

          <SwitchTheme />
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}
