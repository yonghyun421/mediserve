import React from 'react';
import styled from 'styled-components';
import HomeBtn from '../../components/HomeBtn';

const Submit = () => {
  return (
    <QnASection>
      <QA>
        <span>Q</span>
        <Span1>&amp;</Span1>
        <span>A</span>
      </QA>
      <SubmitMsg>
        <Msg>질문이 전송되었습니다.</Msg>
      </SubmitMsg>
      <MdsBox>
        <Mds>MDS포인트</Mds>
        <MdsCount>2.5</MdsCount>
        <Mds>개가 차감됩니다.</Mds>
      </MdsBox>
      <SubmitDescBox>
        <span>
          상담은 실시간이 아니며,
          <br />
          추가질문시마다 <Point>MDS포인트 2개</Point>가
          <br />
          자동으로 추가 차감됩니다.
        </span>
      </SubmitDescBox>

      <HomeBtn />
    </QnASection>
  );
};

export default Submit;

const QnASection = styled.div`
  width: 414px;
  height: 896px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const QA = styled.div`
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
  font-size: 37px;
  padding-bottom: 10px;
`;

const Span1 = styled.span`
  font-size: 25px;
  line-height: 27px;
`;

const MdsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 0 46px;
  margin-bottom: 19px;
`;

const Mds = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 23px;
  letter-spacing: 0;
  margin-bottom: 1px;
  font-size: 20px;
`;

const MdsCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 27px;
  letter-spacing: 0;
  width: 60px;
  margin: 0 5px;
  background-color: #5cdde5;
  font-size: 24px;
`;

const SubmitMsg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Msg = styled.h1`
  height: 30px;
  font-size: 30px;
  font-weight: 700;
  margin: 16px 0;
`;

const SubmitDescBox = styled.div`
  width: 236px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0;
  margin: 231px 0 106px 0;
`;

const Point = styled.span`
  color: #3db8c0;
`;
