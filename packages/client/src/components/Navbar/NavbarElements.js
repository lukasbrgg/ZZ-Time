import {NavLink as Link} from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  margin-top: 50px;
  background: transparent;
  height: 70px;
  display: grid;
  grid-template-columns: 50% 50%;
  position: absolute;
  width: 1920px;
  z-index: 10;
  flex: 1;

  @media only screen and (max-width: 40em) {
    position: fixed;
    width: 1920px;
    bottom: 0;
  }
`;

export const Wrapper = styled.main`
  display: flex;
`;

export const BtnWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: -20px;
  margin-right: 15px;
`;

export const Logo = styled.img`
  margin-top: 10px;
  width: 100px;
  cursor: pointer;
  height: auto;
  margin-left: -9px;
`;

export const Hamburger = styled.button`
  height: 3rem;
  width: 3rem;
  position: relative;
  font-size: 12px;

  display: none;

  @media only screen and (max-width: 40em) {
    display: block;
  }

  border: none;
  background: transparent;
  outline: none;

  cursor: pointer;

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 150%;
    width: 150%;
    top: -25%;
    left: -25%;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  font-family: Jost, sans-serif;
  font-size: 27px;
  text-decoration: none;
  transition: 0.3s;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  &:hover {
    opacity: 0.5;
  }
  @media only screen and (max-width: 40em) {
    padding: 1rem 0;
  }
`;
export const Lines = styled.div`
  top: 50%;
  margin-top: -0.125em;

  &,
  &:after,
  &:before {
    /* Create lines */
    height: 2px;
    pointer-events: none;
    display: block;
    content: "";
    width: 100%;
    background-color: black;
    position: absolute;
  }

  &:after {
    /* Move bottom line below center line */
    top: -0.8rem;
  }

  &:before {
    /* Move top line on top of center line */
    top: 0.8rem;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-content: center;
  width 800px;

  @media only screen and (max-width: 40em) {
    position: fixed;
    right: 0;
    top: 0;

    height: 100%;

    flex-direction: column;

    background-color: white;
    padding: 1rem 2rem;

    transition: 0.2s ease-out;

    transform: ${({openDrawer}) =>
    openDrawer ? `translateX(0)` : `translateX(100%)`};
  }
`;

export const NavBtn = styled.nav`
  margin: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  background: transparent;
  color: #000000;
  border-style: solid;
  border-width: 2px;
  border-color: #272727;
  cursor: pointer;
  font-family: Jost, sans-serif;
  font-size: 20px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-right: -10px;

  padding: 5px 25px;
  /* Second Nav */

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #272727;
    color: #fff;
  }
`;
export const NavBtnLink1 = styled.div`
  background: transparent;
  color: #000000;
  cursor: pointer;
  font-family: Jost, sans-serif;
  font-size: 20px;
  margin-right: 10px;
  transition: 0.3s;
  text-decoration: none;

  :hover {
    color: #616161;
  }

  /* Second Nav */
`;
