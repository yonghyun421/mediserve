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
        <span>Q</span>
        <Span1>&amp;</Span1>
        <span>A (의료)</span>
      </QA>
      <Text1>
        <span>흉부외과</span>
      </Text1>
      <Divide></Divide>
      <SortBtn></SortBtn>
      <DoctorList />
      <DoctorList />
      <DoctorList />
      <DoctorList />
      <HomeBtn />
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

const OverlapGroup7 = styled.div`
  height: 55px;
  margin-top: 10px;
  margin-left: 2px;
  display: flex;
  padding: 15px 27px;
  align-items: flex-start;
  min-width: 200px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 20px #0000001a;
`;

const OverlapGroup15 = styled.div`
  height: 20px;
  width: 139px;
`;

const OverlapGroup = styled.div`
  height: 18px;
  width: 78px;
`;
