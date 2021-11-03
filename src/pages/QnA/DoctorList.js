import React from 'react';
import styled from 'styled-components';
import { ValignTextBottom } from '../../components/ValignTextBottom';

const DoctorList = () => {
  return (
    <DocList>
      <DocImg src="images/picture1.png"></DocImg>
      <DocDetailBox>
        <DocDetailHeader>
          <DocName>
            <span>홍길동</span>
          </DocName>
          <Counsel>
            <span>상담평가</span>
          </Counsel>
          <Rating>
            <span>별</span>
          </Rating>
        </DocDetailHeader>
        <DocDesc>
          <p>
            <span>
              서울특별시 보라매병원 흉부외과 교수
              <br />
              대한심장혈관외과학회 학술위원
            </span>
          </p>
          <More>
            <span>...더보기</span>
          </More>
        </DocDesc>
      </DocDetailBox>
    </DocList>
  );
};

export default DoctorList;

const DocList = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 122px;
  border-bottom: 1px solid #3db8c0;
  padding: 0 25px;
`;

const DocImg = styled.img`
  width: 81px;
  height: 81px;
  object-fit: cover;
`;

const DocDetailBox = styled.div`
  padding-left: 10px;
`;

const DocDetailHeader = styled.div`
  height: 18px;
  display: flex;
  margin-top: 20px; ;
`;

const DocDesc = styled.div`
  height: 43px;
  width: 286px;
  padding-top: 10px;
  font-size: 14px;
`;

const More = styled.div`
  letter-spacing: 0;
  position: absolute;
  right: 0;
  bottom: 12px;
  width: 48px;
  height: 17px;
  font-size: 12px;
`;

const Counsel = styled.div`
  height: 15px;
  width: 117px;
  letter-spacing: 0;
  font-size: 15px;
`;

const Rating = styled.div`
  height: 16px;
  letter-spacing: 0;
  width: 17px;
  font-size: 12px;
`;

const DocName = styled.div`
  ${ValignTextBottom}
  height: 18px;
  letter-spacing: 0;
  width: 61px;
  font-size: 18px;
`;
