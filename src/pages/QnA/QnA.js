import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Next from '../../components/Next/Next';
import QnATab from '../../components/QnA/QnATab';

const CATEGORY = [
  { subject: '의 료', checked: false },
  { subject: '의 약 품', checked: false },
  { subject: '의학 정보 / 기사', checked: false },
  { subject: '영 양', checked: false },
  { subject: '운 동', checked: false },
  { subject: '기 타', checked: false },
];

const QnA = () => {
  const [Category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(CATEGORY);
  }, []);

  const SelectCategory = e => {
    // setCategory(e.target.getAttribute('name'));
    console.log(e.target.getAttribute('name'));
    // setCategory(CATEGORY);
    // 이부분에서 선택한 버튼 checked만 true로 바꿔서 이용해서 배경색 바꿔줘야힘
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
            key={idx}
            onClick={SelectCategory}
            name={category.subject}
          >
            {category.subject}
          </CategoryBox>
        ))}
      </CategoryList>
      <Text>상담료로 MDS 토큰을 지불하셔야합니다.</Text>
      <Next Title="NEXT" />
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
  width: 50%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  background-color: #ffffff;
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
