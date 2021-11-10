import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BackTab = ({ Na, De }) => {
  return (
    <BackTabSection>
      <BackBtn to="/">
        <BackIcon src="images/backIcon.png" />
      </BackBtn>
      <BackTitle>
        <Name>{Na}</Name>
        <Desc>{De}</Desc>
      </BackTitle>
    </BackTabSection>
  );
};

export default BackTab;

const BackTabSection = styled.div`
  width: 100%;
  display: flex;
  position: sticky;
  top: 84px;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0;
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
  font-size: 1.4rem;
  line-height: 29.7px;
  font-weight: 700;
`;

const Desc = styled.span``;

const BackBtn = styled(Link)`
  text-decoration: none;
`;
