import { ReactNode } from 'react';
import { ContainerS } from './Container.styled';

export default function Container({ children }: { children: ReactNode }) {
  return <ContainerS>{children}</ContainerS>;
}
