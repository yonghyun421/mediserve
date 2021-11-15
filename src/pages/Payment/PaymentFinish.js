import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router';

import styled from 'styled-components';

const PaymentFinish = props => {
  const history = useHistory();
  useEffect(() => {
    setTimer();
    console.log(props);
  }, []);

  const setTimer = () => {
    setInterval(goToHome, 5000);
  };
  const goToHome = () => {
    history.push('/');
  };
  return (
    <TotalWrapper>
      <Wrapper>
        <Title>결제가 완료되었습니다.</Title>
        <Subscript>
          <TimeWrapper>
            약 <Time>15</Time>분 후 조제가 완료되오니
          </TimeWrapper>
          방문하여 복약상담하세요.
        </Subscript>
      </Wrapper>
    </TotalWrapper>
  );
};

export default withRouter(PaymentFinish);

const TotalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 200px;
`;

const Title = styled.div`
  font-family: 'NanumGothic';
  font-weight: bold;
  font-size: 30px;
  line-height: 30px;
  color: #333333;
  margin-bottom: 4rem;
`;

const Subscript = styled.div`
  text-align: center;
  margin-bottom: 100px;
  font-family: 'NanumGothic';
  font-weight: bold;
  font-size: 20px;
  color: #014d52;
  line-height: 150%;
`;

const TimeWrapper = styled.div`
  display: flex;
`;

const Time = styled.div`
  display: flex;
  justify-content: right;
  align-items: flex-end;
  width: 43px;
  margin: 1px;
  background: rgba(92, 221, 229, 0.2);
`;
