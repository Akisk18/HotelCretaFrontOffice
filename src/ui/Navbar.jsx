import { HiOutlineUsers } from "react-icons/hi";
import {
  IoCalendarOutline,
  IoHomeOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdOutlineDoorBack } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const UlList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-right: 2rem;

    color: #34495e;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 1rem 1.7rem;
    transition: all 0.3s;
    text-decoration: none;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #ecf0f1;
    background-color: #3498db;
    border-radius: 99999px;
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: #34495e;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: #ecf0f1;
  }
`;

function Navbar() {
  return (
    <nav>
      <UlList>
        <li>
          <StyledNavLink to="/home">
            <IoHomeOutline /> <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          {" "}
          <StyledNavLink to="/bookings">
            <IoCalendarOutline /> <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/rooms">
            {" "}
            <MdOutlineDoorBack /> <span>Rooms</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            {" "}
            <HiOutlineUsers /> <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            {" "}
            <IoSettingsOutline /> <span>Settings</span>
          </StyledNavLink>
        </li>
      </UlList>
    </nav>
  );
}

export default Navbar;
