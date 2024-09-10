import styled from 'styled-components';
import { Pagination } from '@mui/material';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const StyledPagination = styled(Pagination)`
  & .MuiPaginationItem-root {
    margin: 0 5px;
  }

  & .MuiPaginationItem-previousNext {
    margin: 0 10px;
  }
`;
