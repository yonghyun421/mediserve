import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

const BackTab = ({ Na, De, history }) => {
  const goBack = () => {
    history.goBack();
  };

  return (
    <BackTabSection>
      <BackIcon onClick={goBack} src="images/backIcon.png" />
      <BackTitle>
        <Name>{Na}</Name>
        <Desc>{De}</Desc>
      </BackTitle>
    </BackTabSection>
  );
};

export default withRouter(BackTab);

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
  position: absolute;
  width: 10px;
  left: 20px;
`;

const BackTitle = styled.div`
  width: 100%;
  text-align: center;
`;

const Name = styled.h1`
  font-size: 1.4rem;
  line-height: 29.7px;
  font-weight: 700;
`;

const Desc = styled.span``;

// const BackBtn = styled(Link)`
//   text-decoration: none;
// `;
