import styled from "styled-components";

export const ButtonModalHeading = styled.h3`
  font-size: 1.2rem;
  font-weight: 200;
`;

export const ButtonDanger = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 3rem;
  background-color: #ff000d;
  border-radius: 10px;
  color: #ecf0f1;
  border: none;
  margin-top: 1rem;
  font-size: 1.4rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  font-weight: 500;
  transition: color 0.2s, background-color 0.2s;
  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    background-color: #8d0007;
  }
`;

export const ButtonIcon = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
`;

export const BackButton = styled.button`
  outline: none;
  color: #34495e;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  background-color: #ecf0f1;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 3rem;
  background-color: #3498db;
  border-radius: 10px;
  color: #ecf0f1;
  border: none;
  margin-top: 1rem;
  font-size: 1.4rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  font-weight: 500;
  transition: color 0.2s, background-color 0.2s;
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
  &:disabled:hover {
    background-color: gray;
  }
  &:hover {
    background-color: #34495e;
  }
`;

export default Button;
