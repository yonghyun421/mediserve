import React from 'react';
import styled from 'styled-components';

const DocRating = () => {
  return (
    <>
      <Star src="images/star.png" />
      <Star src="images/star.png" />
      <Star src="images/star.png" />
      <Star src="images/star.png" />
      <Star src="images/star.png" />
    </>
  );
};

export default DocRating;

const Star = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 1px;
`;
