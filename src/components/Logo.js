import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import Inner from './Inner';

const Logo = () => (
  <Inner>
    <Link to="/">
      <LogoImg src={logo} />
    </Link>
  </Inner>
);

export default Logo;

const LogoImg = styled.img`
  width:auto;
  height:200px;
  padding-top:100px;
  padding-bottom:50px;
  margin:1rem 0;
`;
