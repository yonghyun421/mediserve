import React from 'react';
import styled from 'styled-components';

const Next = ({ Title }) => {
  // return <Next1 src="images/nextBtn.png" />;
  return (
    <NextBox>
      <NextBtn>{Title}</NextBtn>
    </NextBox>
  );
};

export default Next;

const NextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NextBtn = styled.div`
  width: 90%;
  height: 54px;
  background: linear-gradient(90.1deg, #7ae0cc -2.23%, #47b1d1 99.89%);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 800;
  color: #ffffff;
  margin-top: 40px;
  /* margin-bottom: 100px; */
  /* position: absolute; */
  /* bottom: 100px; */
`;
