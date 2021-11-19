import React, { useEffect } from 'react';
import styled from 'styled-components';
import Tab from '../../components/Tab';
import PayMsg from '../../components/PayMsg';

const PostingResult = ({ history }) => {
  const goToMain = () => {
    history.push('/');
  };

  const makeDelay = () => {
    setInterval(goToMain, 1000);
  };

  useEffect(() => {
    makeDelay();
  }, []);

  return (
    <>
      <Tab Na="포스팅 의뢰" />
      <SubmitMsg>
        <Msg>질문이 전송되었습니다.</Msg>
      </SubmitMsg>
      <PayMsg credit="20" />
      <SubmitDescBox>
        <span>
          의뢰 수락 여부는
          <br />
          마이페이지나 알림목록에서
          <br />
          확인 가능합니다.
        </span>
      </SubmitDescBox>
    </>
  );
};

export default PostingResult;

const SubmitMsg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 192px 40px 27px 40px;
`;

const Msg = styled.h1`
  height: 30px;
  font-size: 30px;
  font-weight: 700;
`;

const SubmitDescBox = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0;
  margin: 198px 0 106px 0;
`;
