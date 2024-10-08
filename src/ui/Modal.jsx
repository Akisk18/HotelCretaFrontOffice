import { HiX } from "react-icons/hi";
import styled from "styled-components";

const ModalOverlay = styled.div`
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

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;

  max-width: 90%;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 50px;
  position: absolute;
  color: #34495e;

  top: 15px;
  right: 20px;
  cursor: pointer;
`;

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <HiX />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;
