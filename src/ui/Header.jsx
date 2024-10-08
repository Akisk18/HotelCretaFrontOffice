import { FiLogOut, FiUser } from "react-icons/fi";
import styled from "styled-components";
import { useLogout } from "../features/useLogout";
import SpinnerMini from "./SpinnerMini";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: #ecf0f1;
  height: 5vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  & svg {
    background-color: #ecf0f1;
    width: 2rem;
    height: 2rem;
  }
`;

const Button = styled.button`
  border: none;
  color: #34495e;
  cursor: pointer;
`;

function Header() {
  const navigate = useNavigate();
  const { logout, isLoading } = useLogout();
  return (
    <StyledHeader>
      <Button onClick={() => navigate("/user")}>
        {" "}
        <FiUser />
      </Button>

      <Button disabled={isLoading} onClick={logout}>
        {!isLoading ? <FiLogOut /> : <SpinnerMini />}
      </Button>
    </StyledHeader>
  );
}

export default Header;
