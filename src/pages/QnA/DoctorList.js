import React, { useState } from 'react';
import styled from 'styled-components';
import DocRating from '../../components/DocRating/DocRating';
import { ValignTextBottom } from '../../components/ValignTextBottom';

const DoctorList = ({ Feed }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SelectBox>
      <DocList>
        <DocImg Feed={Feed} src="images/picture1.png" />
        <DocDetailBox>
          <DocDetailHeader>
            <DocName>
              <span>홍길동</span>
            </DocName>
            <Rating Feed={Feed}>
              <Counsel>상담평가</Counsel>
              <DocRating />
            </Rating>
          </DocDetailHeader>
          <DocDesc>
            <Profile isOpen={isOpen} Feed={Feed}>
              서울특별시 보라매병원 흉부외과 교수 대한심장혈관외과학회 학술위원
              서울특별시 보라매병원 흉부외과 교수 대한심장혈관외과학회 학술위원
              서울특별시 보라매병원 흉부외과 교수 대한심장혈관외과학회 학술위원
              서울특별시 보라매병원 흉부외과 교수 대한심장혈관외과학회 학술위원
              서울특별시 보라매병원 흉부외과 교수 대한심장혈관외과학회 학술위원
            </Profile>
            <More onClick={ToggleOpen}>
              <span>{isOpen ? '접기' : '...더보기'}</span>
            </More>
          </DocDesc>
        </DocDetailBox>
      </DocList>
    </SelectBox>
  );
};

export default DoctorList;

const SelectBox = styled.div`
  &:hover {
    background: rgba(92, 221, 230, 0.2);
  }
`;

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
  width: ${props => (props.Feed ? '107px;' : '81px;')};
  height: ${props => (props.Feed ? '107px;' : '81px;')};
  object-fit: cover;
`;

const DocDetailBox = styled.div`
  padding-left: 10px;
`;

const DocDetailHeader = styled.div`
  display: flex;
  margin-top: 20px; ;
`;

const DocDesc = styled.div`
  width: 100%;
  padding-top: 10px;
  font-size: 14px;
`;

const Profile = styled.div`
  width: 90%;
  height: ${props => (props.isOpen ? '"";' : '40px;')};
  overflow-y: ${props => (props.isOpen ? '"";' : 'hidden;')};
  font-size: ${props => (props.Feed ? '16px;' : '14px;')};
  line-height: ${props => (props.Feed ? '20px;' : '14px;')};
  margin-bottom: 10px;
`;

const More = styled.div`
  position: absolute;
  text-align: right;
  right: 10px;
  bottom: 8px;
  font-size: 12px;
  letter-spacing: 0;
  cursor: pointer;
  padding-top: 10px;
`;

const Counsel = styled.span`
  letter-spacing: 0;
  font-size: 15px;
  line-height: 15px;
  padding: 0 5px 0 10px;
`;

const Rating = styled.div`
  display: ${props => (props.Feed ? 'none;' : 'flex;')};
  justify-content: center;
  align-items: baseline;
  letter-spacing: 0;
  font-size: 12px;
`;

const DocName = styled.div`
  ${ValignTextBottom}
  height: 18px;
  letter-spacing: 0;
  width: 61px;
  font-size: 18px;
`;
