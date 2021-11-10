import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import QnATab from '../../components/QnA/QnATab';
import DoctorList from './DoctorList';
import SortBtn from './SortBtn';

const SubjectDetail = () => {
  const [Dlist, setDlist] = useState([]);

  useEffect(() => {
    fetch('data/doctor.json')
      .then(res => res.json())
      .then(data => {
        setDlist(data.doctors);
      });
  }, []);
  return (
    <>
      <QnATab />
      <Text1>
        <span>흉부외과</span>
      </Text1>
      <Divide />
      <SortBtn />
      <DocList>
        {Dlist.map((doctor, idx) => (
          <DoctorList Doctor={doctor} key={idx} />
        ))}
      </DocList>
    </>
  );
};

export default SubjectDetail;

const DocList = styled.div`
  margin-bottom: 100px;
`;

const Text1 = styled.div`
  font-size: 24px;
  text-align: center;
  letter-spacing: 0;
`;

const Divide = styled.div`
  width: 85%;
  padding: 1px 0;
  background-color: #e5e5e5;
  margin: 24px auto 12px auto;
`;
