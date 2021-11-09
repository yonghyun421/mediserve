import React from 'react';
import styled from 'styled-components';
import QnATab from '../../components/QnA/QnATab';
import DoctorList from './DoctorList';
import SortBtn from './SortBtn';

const SubjectDetail = () => {
  return (
    <QnASection>
      <QnATab />
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

const Text1 = styled.div`
  font-size: 24px;
  text-align: center;
  letter-spacing: 0;
`;

const Divide = styled.div`
  width: 356px;
  padding: 1px 0;
  background-color: #e5e5e5;
  margin: 24px 0 12px 0;
`;
