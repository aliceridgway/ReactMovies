import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Pagination = ({ currentPage, paginate, totalPages }) => {
  const previous = Math.max(currentPage - 1, 1);
  const next = Math.min(currentPage + 1, 4);

  return (
    <PaginationBar>
      <a onClick={() => paginate(previous)} href="#/">Previous</a>
      <p>
        Page
        {' '}
        {currentPage}
        {' '}
        of
        {' '}
        {totalPages}
      </p>
      <a onClick={() => paginate(next)} href="#/">Next</a>
    </PaginationBar>
  );
};


export default Pagination;

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

const PaginationBar = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin:0 auto;
`;
