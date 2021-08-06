import React from 'react';
// import { MenuRounded } from '@material-ui/icons/esm';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import {
  TextField
} from '@material-ui/core';

  
const Navbar = () => {
  return (
    <>
      <Nav>
        {/* <Bars /> */}
  
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/favorites' activeStyle>
            Favorites
          </NavLink>
          <NavLink to='/plan' activeStyle>
            Drink Plan
          </NavLink>
        </NavMenu>
        <NavSearch>
          <NavSearchField id="search" type="search" label="Enter Drink Name" variant="filled" />
          <NavBtnIcon /> 
        </NavSearch> 

        
      </Nav>
    </>
  );
};
  
const Nav = styled.nav`
  fontWeight: 'bold';
  background: #154fee;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;
  
const NavLink = styled(Link)`
  textAlign: 'center';
  fontWeight: 'bold';
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
  
// const Bars = styled(MenuRounded)`
//   display: none;
//   color: #808080;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;
  
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
const NavSearch = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 70px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
const NavBtnIcon = styled(SearchIcon)`
  border-radius: 10px;
  background: #154fee;
  padding: 10px 22px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  }
`;

const NavSearchField = styled(TextField)`
  background: white;
  border-radius: 10px;
`;

export default Navbar;

