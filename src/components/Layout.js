import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Layout = ({ children }) => (
  <Wrapper>
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
