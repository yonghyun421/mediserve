import React, { useState } from 'react';
import styled from 'styled-components';
import { ValignTextBottom } from '../components/ValignTextBottom';

const FeedInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DocList>
      <DocImg src="images/sunny.png" />
      <DocDetailBox>
        <DocDetailHeader>
          <DocName>
            <span>sunny</span>
          </DocName>
        </DocDetailHeader>
        <DocDesc>
          <Profile isOpen={isOpen}>
            서울특별시 보라매병원 흉부외과 교수 대한심장혈관외과학회 학술위원
            서울특별시 보라매병원 흉부외과 교수 대한심장혈관외과학회 학술위원
            서울특별시 보라매병원 흉부외과 교수 대한심장혈관외과학회 학술위원
            서울특별시 보라매병원 흉부외과 교수 대한심장혈관외과학회 학술위원
            서울특별시 보라매병원 흉부외과 교수 대한심장혈관외과학회 학술위원
          </Profile>
          <More onClick={ToggleOpen}>
            <span>...더보기</span>
          </More>
        </DocDesc>
      </DocDetailBox>
    </DocList>
  );
};

export default FeedInfo;

const DocList = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 15px 0 15px 0;
  margin: 0 25px;
  border-bottom: 1px solid #3db8c0;
`;

const DocImg = styled.img`
  width: 107px;
  height: 107px;
  object-fit: cover;
  margin-left: 13px;
`;

const DocDetailBox = styled.div`
  padding-left: 10px;
  padding-bottom: 25px;
`;

const DocDetailHeader = styled.div`
  height: 18px;
  display: flex;
`;

const DocDesc = styled.div`
  width: 100%;
  padding-top: 10px;
  font-size: 14px;
`;

const Profile = styled.div`
  width: 80%;
  height: ${props => (props.isOpen ? '"";' : '55px;')};
  overflow-y: ${props => (props.isOpen ? '"";' : 'hidden;')};
  font-size: 16px;
  line-height: 20px;
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

const DocName = styled.div`
  letter-spacing: 0;
  font-size: 18px;
  font-weight: 700;
`;
