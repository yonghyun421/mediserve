import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import QnATab from '../../components/QnA/QnATab';
import DoctorList from './DoctorList';
import SortBtn from './SortBtn';
import { Link } from 'react-router-dom';

const SubjectDetail = () => {
  const [Dlist, setDlist] = useState([]);
  const [Subject, setSubject] = useState('');

  useEffect(() => {
    fetch('data/doctor.json')
      .then(res => res.json())
      .then(data => {
        setDlist(data.doctors);
      });
    setSubject(localStorage.getItem('subject'));
    localStorage.removeItem('subject');
  }, []);
  return (
    <>
      <QnATab />
      <Text1>
        <span>{Subject}</span>
      </Text1>
      <Divide />
      <SortBtn />
      <DocList>
        {Dlist.map((doctor, idx) => (
          <LinkBtn to="/posting" key={idx}>
            <DoctorList Doctor={doctor} Title="List" />
          </LinkBtn>
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

const LinkBtn = styled(Link)`
  text-decoration: none;
  color: black;
`;
