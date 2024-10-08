import { HiX } from "react-icons/hi";
import styled from "styled-components";

const ConfirmOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ConfirmMessage = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: #34495e;
`;

const ConfirmContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;

  width: 30rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 35px;
  position: absolute;
  color: #34495e;
  right: 42rem;
  top: 22rem;

  cursor: pointer;
`;

function ConfirmDelete({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <ConfirmOverlay>
      <ConfirmContent>
        <ConfirmMessage>Confirm Delete</ConfirmMessage>
        <CloseButton onClick={onClose}>
          <HiX />
        </CloseButton>
        {children}
      </ConfirmContent>
    </ConfirmOverlay>
  );
}

export default ConfirmDelete;
