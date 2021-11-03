import React from 'react';
import styled from 'styled-components';

const BackTab = () => {
  return (
    <BackTabSection>
      <BackIcon src="images/backIcon.png" />
      <BackTitle>
        <span>병원 문전 약국 찾기</span>
      </BackTitle>
    </BackTabSection>
  );
};

export default BackTab;

const BackTabSection = styled.div`
  width: 414px;
  height: 71px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(0deg, #e5e5e5 0%, rgba(245, 245, 245, 0) 100%);
`;

const BackIcon = styled.img`
  width: 32px;
  height: 32px;
  margin: 0 34px 0 22px;
  object-fit: cover;
`;

const BackTitle = styled.div`
  font-size: 30px;
  line-height: 29.7px;
  font-weight: 700;
`;
