import { Box } from '@mui/material';
import { ReactNode } from 'react';
import styled from 'styled-components';

const SectionS = styled(Box)`
  padding: 50px 0;
`;

export default function Section({ children }: { children: ReactNode }) {
  return <SectionS as="section">{children}</SectionS>;
}
