import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DocRating = ({ Rates }) => {
  const [emptyStar, setEmptyStar] = useState([1, 2, 3, 4, 5]);
  const [fullStar, setFullStar] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    setFullStar(fullStar.slice(0, Rates));
    setEmptyStar(emptyStar.slice(0, 5 - Rates));
  }, []);

  return (
    <>
      {fullStar?.map(star => (
        <Star key={star} src="images/fullStar.png" />
      ))}
      {emptyStar?.map(star => (
        <Star key={star} src="images/emptyStar.png" />
      ))}
    </>
  );
};

export default DocRating;

const Star = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 1px;
`;
