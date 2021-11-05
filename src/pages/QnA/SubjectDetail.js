import React from 'react';
import styled from 'styled-components';
import { ValignTextBottom } from '../../components/ValignTextBottom';
import DoctorList from './DoctorList';
import SortBtn from './SortBtn';
import HomeBtn from '../../components/HomeBtn';

const SubjectDetail = () => {
  return (
    <QnASection>
      <QA>
        <CaretRight src="images/backIcon.png" />
        <span>Q</span>
        <Span1>&amp;</Span1>
        <span>A (의료)</span>
      </QA>
      <Text1>
        <span>흉부외과</span>
      </Text1>
      <Divide />
      <SortBtn />
      <DoctorList />
      <DoctorList />
      <DoctorList />
      <DoctorList />
    </QnASection>
  );
};

export default SubjectDetail;

const QnASection = styled.div`
  width: 414px;
  height: 896px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const CaretRight = styled.img`
  position: absolute;
  width: 10px;
  left: 20px;
`;

const QA = styled.div`
  display: flex;
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

const Text1 = styled.div`
  ${ValignTextBottom}
  font-size: 24px;
  width: 414px;
  height: 24px;
  text-align: center;
  letter-spacing: 0;
`;

const Divide = styled.div`
  width: 356px;
  height: 2px;
  background-color: #e5e5e5;
  margin: 24px 0;
`;
