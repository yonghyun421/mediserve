import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Next from '../../components/Next/Next';
import QnATab from '../../components/QnA/QnATab';
import { Link } from 'react-router-dom';

const CATEGORY = [
  { id: 1, subject: '의 료', checked: false },
  { id: 2, subject: '의 약 품', checked: false },
  { id: 3, subject: '의학 정보 / 기사', checked: false },
  { id: 4, subject: '영 양', checked: false },
  { id: 5, subject: '운 동', checked: false },
  { id: 6, subject: '기 타', checked: false },
];

const QnA = () => {
  const [Category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(CATEGORY);
  }, []);

  const onToggle = e => {
    setCategory(
      Category.map(a =>
        a.id === Number(e.target.id)
          ? { ...a, checked: !a.checked }
          : { ...a, checked: false }
      )
    );
  };

  return (
    <>
      <QnATab />
      <QBox>
        <p>상담내용이 어떤 분야 입니까?</p>
      </QBox>
      <CategoryList>
        {Category?.map((category, idx) => (
          <CategoryBox
            id={category.id}
            key={idx}
            onClick={onToggle}
            name={category.subject}
            checked={category.checked}
          >
            {category.subject}
          </CategoryBox>
        ))}
      </CategoryList>
      <Text>상담료로 MDS 토큰을 지불하셔야합니다.</Text>
      <LinkBtn to="/medical">
        <Next Title="NEXT" />
      </LinkBtn>
    </>
  );
};

export default QnA;

const QBox = styled.div`
  padding-bottom: 20px;
  text-align: center;
  margin-top: 61px;
  font-size: 24px;
  font-weight: 700;
`;

const CategoryList = styled.div``;

const CategoryBox = styled.div`
  width: 60%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  background-color: ${props => (props.checked ? '#5bdde5;' : '#ffffff;')};
  color: ${props => (props.checked ? '#ffffff;' : 'black;')};
  border-radius: 20px;
  box-shadow: 0px 0px 20px #0000001a;
  font-size: 24px;
  font-weight: 700;

  &:hover {
    background-color: #5bdde5;
  }
`;

const Text = styled.div`
  margin-top: 29px;
  text-align: center;
  font-weight: 700;
  color: #014d52;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const LinkBtn = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;
