import { Button } from '@mui/material';
import { Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  width: 100%;

  & .MuiInputBase-input {
    padding: 15px 14px;
  }

  & .MuiFormControl-root {
    width: 100% !important;
  }
`;

export const StyledField = styled(Field)`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  height: fit-content;
  padding: 14px 30px;
  text-wrap: nowrap;
`;
