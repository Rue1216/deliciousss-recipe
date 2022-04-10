import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { GiForkKnifeSpoon } from 'react-icons/gi'
import mySvg from './banner-image.svg'

function Navbar() {
    return ( 
        <Nav>
          <Logo to={'/'}><GiForkKnifeSpoon/><h1> Deliciousss </h1><GiForkKnifeSpoon /></Logo>
          <BannerImage src={mySvg} alt="banner-image" />
        </Nav>
     );
}

//style
const Nav = styled.div`
  padding: 5rem 0;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  svg{
    font-size: 2.5rem;
    color: white;
  }
  @media(max-width:768px){
    margin-top: 3rem;
    svg{
      font-size: 2rem;
    }
  }
`

const Logo = styled(Link)`
  text-decoration: none;
  filter: drop-shadow( 0 0 0.75rem #d4590c);
  h1{
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    display: inline;
    color: white;
  }
`

const BannerImage = styled.img`
  width: 20rem;
  height: auto;
  position: absolute;
  bottom: -1%;
  z-index: -1;
  @media(max-width:768px){
    width: 16rem;
  }
`


export default Navbar;