import React from 'react';
import styled from 'styled-components';

const Tab = ({ Na, De }) => {
  return (
    <BackTabSection>
      <BackTitle>
        <Name Na={Na}>{Na}</Name>
        <Desc>{De}</Desc>
      </BackTitle>
    </BackTabSection>
  );
};

export default Tab;

const BackTabSection = styled.div`
  width: 414px;
  height: 71px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(0deg, #e5e5e5 0%, rgba(245, 245, 245, 0) 100%);
`;

const BackTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: auto 0;
`;

const Name = styled.h1`
  font-size: ${props => (props.Na === '포스팅 의뢰' ? '37px;' : '30px;')}
  line-height: 29.7px;
  font-weight: 700;
`;

const Desc = styled.span``;
