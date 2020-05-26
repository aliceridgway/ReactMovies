import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import background from '../images/background_w1980.jpg';


const Layout = ({ children }) => (
  <Wrapper>
    {/* <Background src={background} /> */}
    {children}
  </Wrapper>


);

export default Layout;

Layout.propTypes = {
  children: PropTypes.isRequired,
};

const Wrapper = styled.div`
  position:relative;
  width:100vw;
  max-width:1980px;
  min-height:100vh;
`;

const Background = styled.img`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  object-fit:contain;
  z-index:-1;
`;
