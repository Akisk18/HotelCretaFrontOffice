import styled from "styled-components";
import Navbar from "./Navbar";

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  grid-row: 1/-1;
  background-color: #ecf0f1;
  height: 100vh;
  align-items: center;
`;

const Image = styled.img`
  width: 10rem;
  height: 10rem;
  margin-top: 5%;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Image src="logo.png" alt="hotel creta logo" />
      <Navbar />
    </StyledSidebar>
  );
}

export default Sidebar;
