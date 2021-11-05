import React from 'react';
import styled from 'styled-components';

const BackTab = ({ Na, De }) => {
  return (
    <BackTabSection>
      <BackIcon src="images/backIcon.png" />
      <BackTitle>
        <Name>{Na}</Name>
        <Desc>{De}</Desc>
      </BackTitle>
    </BackTabSection>
  );
};

export default BackTab;

const BackTabSection = styled.div`
  width: 414px;
  height: 71px;
  display: flex;
  position: sticky;
  top: 84px;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(0deg, #e5e5e5 0%, rgba(245, 245, 245, 0) 100%);
  z-index: 2;
`;

const BackIcon = styled.img`
  width: 32px;
  height: 32px;
  margin: 0 34px 0 22px;
  object-fit: cover;
`;

const BackTitle = styled.div`
  width: 100%;
  text-align: center;
  padding-right: 70px;
`;

const Name = styled.h1`
  font-size: 30px;
  line-height: 29.7px;
  font-weight: 700;
`;

const Desc = styled.span``;
