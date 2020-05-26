import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Inner from './Inner';
import inlineLogo from '../images/inline-logo.svg';

const Header = () => (
  <Navigation>
    <Inner>
      <Link to="/">
        <Logo src={inlineLogo} />
      </Link>
    </Inner>
  </Navigation>
);

export default Header;

const Navigation = styled.nav`
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height:50px;
`;

const Logo = styled.img`
    height:50px;
    width:auto;
    margin:1rem 0;
`;
