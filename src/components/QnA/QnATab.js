import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

const QnATab = ({ history }) => {
  const goBack = () => {
    history.goBack();
  };

  return (
    <QA>
      <CaretRight onClick={goBack} src="images/backIcon.png" />
      <span>Q</span>
      <Span1>&amp;</Span1>
      <span>A</span>
    </QA>
  );
};

export default withRouter(QnATab);

const CaretRight = styled.img`
  position: absolute;
  width: 10px;
  left: 20px;
`;

const QA = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 35px;
  padding-bottom: 10px;
  line-height: 22px;
  letter-spacing: 0;
  white-space: nowrap;
  font-size: 37px;
`;

const Span1 = styled.span`
  font-size: 25px;
  line-height: 27px;
`;
