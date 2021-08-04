import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          
          <NavLink to='/Home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/Favorites' activeStyle>
          Favorites
          </NavLink>
          <NavLink to='/DrinkPlan' activeStyle>
            Drink Plan
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Search'>Search</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;

