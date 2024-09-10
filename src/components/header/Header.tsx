import { AppBar, Toolbar, Typography } from '@mui/material';
import SwitchTheme from '../switchTheme/SwitchTheme';
import styled from 'styled-components';
import Container from '../container/Container';

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

const StyledTypography = styled(Typography)`
  margin-left: 8px;
`;

export default function Header() {
  return (
    <StyledAppBar position="static">
      <Container>
        <StyledToolbar>
          <StyledTypography variant="h1">Todo List</StyledTypography>

          <SwitchTheme />
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}
