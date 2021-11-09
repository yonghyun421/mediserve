import React from 'react';
import styled from 'styled-components';
import QnATab from '../../components/QnA/QnATab';
import Credit from '../../components/Credit/Credit';

const Submit = () => {
  return (
    <>
      <QnATab />
      <SubmitMsg>
        <Msg>질문이 전송되었습니다.</Msg>
      </SubmitMsg>
      <Credit />
      <SubmitDescBox>
        <span>
          상담은 실시간이 아니며,
          <br />
          추가질문시마다 <Point>MDS포인트 2개</Point>가
          <br />
          자동으로 추가 차감됩니다.
        </span>
      </SubmitDescBox>
    </>
  );
};

export default Submit;

const SubmitMsg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 195px;
`;

const Msg = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin: 16px 0;
`;

const SubmitDescBox = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0;
  margin: 212px 0 106px 0;
`;

const Point = styled.span`
  color: #3db8c0;
`;
