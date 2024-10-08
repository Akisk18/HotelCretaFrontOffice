import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  padding: 1.2rem;
`;

export const Label = styled.label`
  color: #34495e;
  font-size: 1.5rem;
  display: flex;
  width: 400px;
  text-align: right;
`;

export const Input = styled.input`
  width: 50rem;
  height: 2.5rem;
  border: 1px solid #34495e;

  border-radius: 15px;
  &:disabled {
    cursor: not-allowed;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
