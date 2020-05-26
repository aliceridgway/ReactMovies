import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Inner = ({ children }) => (
  <InnerContainer>
    {children}
  </InnerContainer>
);

export default Inner;

Inner.propTypes = {
  children: PropTypes.isRequired,
};

export const InnerContainer = styled.div`
    width:80vw;
    max-width:1280px;
    display:block;
    margin:0 auto;
`;
