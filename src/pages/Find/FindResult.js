import React from 'react';
import styled from 'styled-components';

const PHARM_LIST = [
  '보라매 대학약국',
  '보라매 서울약국',
  '새보라매약국',
  '조은약국',
  '거리약국',
];

const FindResult = ({ result }) => {
  const sortList = PHARM_LIST.filter(hos => hos.includes(result));

  return (
    <>
      <ResultSection>
        <FindSection>
          <FindTitle>
            <span>약국 선택</span>
          </FindTitle>
          <InputBox>
            <Ul>
              {sortList.map((pharm, idx) => (
                <Li key={idx}>{pharm}</Li>
              ))}
            </Ul>
          </InputBox>
        </FindSection>
      </ResultSection>
      <PharmSection>
        <PharmTitle>
          <span>약국 위치 확인</span>
        </PharmTitle>
        <PharmMap>
          <span>지도 API</span>
        </PharmMap>
      </PharmSection>
    </>
  );
};

export default FindResult;

const FindSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ResultSection = styled.div`
  width: 100%;
`;

const InputBox = styled.div`
  position: relative;
  width: 225px;
  margin-left: 20px;
  background-color: #f5f5f5;
`;

const FindTitle = styled.div`
  font-size: 20px;
  line-height: 19.8px;
  font-weight: 700;
  padding-top: 10px;
  color: #333333;
`;

const PharmSection = styled.div`
  width: 100%;
  padding: 0 40px 0 40px;
  /* text-align: center; */
`;

const PharmTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 48px;
  margin-left: 37px;
`;

const PharmMap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: #c4c4c4;
  margin: 10px auto 30px auto;
  font-size: 20px;
  font-weight: 700;
`;

const Ul = styled.ul`
  width: 225px;
  background-color: #f5f5f5;
`;

const Li = styled.li`
  width: 225px;
  background-color: #f5f5f5;
  padding: 10px 0 10px 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #000000;
  opacity: 0.3;
  border-bottom: none;

  &:last-child {
    border-bottom: 1px solid #000000;
  }

  &:hover {
    background: #ffffff;
    opacity: 1;
    color: #3db8c0;
    border: 2px solid #3db8c0;
  }
`;
