import { Container } from '@mui/material';
import styled from 'styled-components';

export const ContainerS = styled(Container)`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    min-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1440px;
    padding: 0 80px;
  }
`;
